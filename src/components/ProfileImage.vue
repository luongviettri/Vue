<template>
  <img
    v-bind:src="imageLink"
    class="h-8 w-8 rounded-3xl object-contain"
    alt="User profile image"
  />
</template>
<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
    };
  },
};
</script>
