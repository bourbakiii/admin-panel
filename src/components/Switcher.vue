<template>
  <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
    <input @change="$emit('update:modelValue', $event.target.checked)" type="checkbox" value="" id="default-toggle"
           class="sr-only peer">
    <div
        class="
        w-11
        h-6
        bg-black/[.3]
        peer-focus:outline-none
        peer-focus:ring-1
        peer-focus:ring-main
        rounded-full
        peer
        peer-checked:after:translate-x-full
        peer-checked:after:border-white
        after:content-['']
        after:absolute
        after:top-[2px]
        after:left-[2px]
        after:bg-white
        after:border-gray-300
        after:border
        after:rounded-full
        after:h-5
        after:w-5
        after:transition-all
        peer-checked:bg-black/[.5]"/>
  </label>

</template>
