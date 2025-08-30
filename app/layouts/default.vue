<template>
  <div
    id="layout"
    class="flex flex-col"
  >
    <header class="p-4">
      <TextHeading>
        <slot name="header" />
      </TextHeading>
    </header>
    <main>
      <slot name="content" />
    </main>
  </div>
</template>
