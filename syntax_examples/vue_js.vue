<template>
  <div>
    <h1>Vue Example</h1>
    <ExampleComponent
      :title="title"
      :count-start="countStart"
      :complex-data="complexData"
      :custom-type="customType"
    />
    <ExampleClassComponent
      :title="title"
      :count-start="countStart"
      :complex-data="complexData"
      :custom-type="customType"
    />
  </div>
</template>

<script>
import Vue from "vue";

const ExampleComponent = {
  functional: true,
  props: {
    title: String,
    countStart: Number,
    complexData: Object,
    customType: String,
  },
  render(h, context) {
    const { title, countStart, complexData, customType } = context.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>
          Complex data: {complexData.key1}, {complexData.key2}
        </p>
        <p>Custom type: {customType}</p>
        <button onClick={() => context.listeners.click()}>Click me</button>
      </div>
    );
  },
};

const ExampleClassComponent = Vue.extend({
  props: {
    title: String,
    countStart: Number,
    complexData: Object,
    customType: String,
  },
  data() {
    return {
      count: this.countStart,
      message: "Click the button to start counting.",
    };
  },
  methods: {
    handleClick() {
      this.count += 1;
      this.message = `You clicked the button ${this.count} times.`;
    },
  },
  render(h) {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>
          Complex data: {this.complexData.key1}, {this.complexData.key2}
        </p>
        <p>Custom type: {this.customType}</p>
        <p>{this.message}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  },
});

export default {
  components: {
    ExampleComponent,
    ExampleClassComponent,
  },
  data() {
    return {
      title: "Vue Example Component",
      countStart: 0,
      complexData: {
        key1: "value1",
        key2: 42,
      },
      customType: "option1",
    };
  },
};
</script>
