<template>
  <section>


    <div class="text-center container box mt-3">
      <div class='h1 font-monoton'> {{$config.env.APP_NAME}} </div>
      <div class="fs-2 font-bonbon text-info mt-4">We will be back with new and exciting feature!</div>

      <div class="row mt-5 gx-5 justify-content-center">
        <div class="col-auto">
          <div style='font-size: max(4rem, 9vh)'>{{remaining_day}}</div>
          <div class='fs-3 fold-fs'>{{(remaining_day===1) ? 'Day' : 'Days' }}</div>
        </div>
        <div class="col-auto">
          <div style='font-size: max(4rem, 9vh)'>{{remaining_hour}}</div>
          <div class='fs-3 fold-fs'>{{(remaining_hour===1) ? 'Hour' : 'Hours' }}</div>
        </div>
        <div class="col-auto">
          <div style='font-size: max(4rem, 9vh)'>{{remaining_minutes}}</div>
          <div class='fs-3 fold-fs'> {{(remaining_minutes===1) ? 'Minute' : 'Minutes' }} </div>
        </div>
        <div class="col-auto">
          <div style='font-size: max(4rem, 9vh)'>{{remaining_second}}</div>
          <div class='fs-3 fold-fs'>{{(remaining_second===1) ? 'Second' : 'Seconds' }}</div>
        </div>
      </div>
    </div>
    

  </section>
</template>


<script>
  import moment from 'moment';
  export default {
    head() {
      return {
        title: 'Home' + this.$config.env.APP_TITLE
      }
    },
    data(){
      return {
        publish_datetime: '+00:00 2021-08-14 14:29:47',    // +00:00 2021-06-28 22:53:52
        format: 'Z YYYY-MM-DD HH:mm:ss',

        remaining_day:    0,
        remaining_hour:   0,
        remaining_minutes:   0,
        remaining_second: 0
      }
    },
    created(){
      let unix_publish_datetime = moment.utc(this.publish_datetime, this.format, true).unix();

        let countdown_interval = setInterval(()=>{
          let unix_current_datetime = moment.utc().unix();
          if(unix_publish_datetime>=unix_current_datetime){
            let rest_second = unix_publish_datetime-unix_current_datetime;
            let countdown = moment.duration(rest_second, 's');
    
            this.remaining_day = Number.parseInt(countdown.as('d'));
            this.remaining_hour = countdown._data.hours;
            this.remaining_minutes = countdown._data.minutes;
            this.remaining_second = countdown._data.seconds;
          }else clearInterval(countdown_interval);
        }, 500)

    }
  }
</script>


<style>
  body{
    font-family: 'Cabin', sans-serif;
    text-shadow: 0px 1px 1px rgb(0 0 0 / 30%);
    color: #fff;
    background: url(/img/img.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
  }
  .box{
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
