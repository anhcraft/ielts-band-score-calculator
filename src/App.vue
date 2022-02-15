<template>
  <div class="p-20">
    <header class="text-5xl my-10">IELTS BAND SCORE CALCULATOR</header>
    <div class="flex flex-row gap-10">
      <ol class="grid grid-flow-col gap-x-5 grid-rows-[repeat(10,30px)]">
        <li v-for="i in 40">
          {{ 41-i }}: {{ roundHalf((41-i)/40*9) }}
        </li>
      </ol>
      <div class="grow flex flex-col gap-1">
        <div class="flex flex-row gap-3">
          <p>Reading score:</p>
          <input type="number" min="1" max="9" class="border border-gray-300 px-3 py-1" v-model="a" step="0.5" />
        </div>
        <div class="flex flex-row gap-3">
          <p>Listening score:</p>
          <input type="number" min="1" max="9" class="border border-gray-300 px-3 py-1" v-model="b" step="0.5" />
        </div>
        <div class="flex flex-row gap-3">
          <p>Writing score:</p>
          <input type="number" min="1" max="9" class="border border-gray-300 px-3 py-1" v-model="c" step="0.5" />
        </div>
        <div class="flex flex-row gap-3">
          <p>Speaking score:</p>
          <input type="number" min="1" max="9" class="border border-gray-300 px-3 py-1" v-model="d" step="0.5" />
        </div>
        <div class="my-5">
          Your overall score: <input type="number" min="1" max="9" class="border border-gray-300 px-3 py-1" disabled :value="roundHalf((a + b + c + d) / 4)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      a: 0,
      b: 0,
      c: 0,
      d: 0
    }
  },
  methods: {
    roundHalf: function(n) {
      return (Math.round(n * 2) / 2).toFixed(1)
    }
  }
}
</script>
