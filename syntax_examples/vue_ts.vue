<template>
  <div>
    <h1>Vue TypeScript Example</h1>
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

<script lang="ts">
import Vue, { CreateElement } from "vue";

interface ComplexData {
  key1: string;
  key2: number;
}

type CustomType = "option1" | "option2" | "option3";

const ExampleComponent = Vue.extend({
  functional: true,
  props: {
    title: String,
    countStart: Number,
    complexData: Object as () => ComplexData,
    customType: String as () => CustomType,
  },
  render(h: CreateElement, context: any) {
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
});

const ExampleClassComponent = Vue.extend({
  props: {
    title: String,
    countStart: Number,
    complexData: Object as () => ComplexData,
    customType: String as () => CustomType,
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
  render(h: CreateElement) {
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

export default Vue.extend({
  components: {
    ExampleComponent,
    ExampleClassComponent,
  },
  data() {
    return {
      title: "Vue TypeScript Example Component",
      countStart: 0,
      complexData: {
        key1: "value1",
        key2: 42,
      },
      customType: "option1" as CustomType,
    };
  },
});
</script>
