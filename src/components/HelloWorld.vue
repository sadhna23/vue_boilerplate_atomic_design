<template>
  <div>
    <h1>Hello</h1>
    <AppButton label="Search" shape="circle"/>
    <Input placeholder="Enter your name"/>
  </div>
</template>

<script>

// @ is an alias to /src
import AppButton from './atoms/AppButton'
import Input from './atoms/AppInput'

export default {
  name: "HelloWorld",

  components:{
    AppButton,
    Input
  }
};
</script>