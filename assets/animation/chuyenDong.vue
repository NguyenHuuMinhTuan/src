<template>
  <div class="carousel">
    <img :src="images[currentImageIndex]" alt="Carousel Image" class="carousel-image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
       require('@/assets/image_adv/img_1.jpg'),
       require('@/assets/image_adv/img_2.jpg'),
       require('@/assets/image_adv/img_3.jpg'),
       require('@/assets/image_adv/img_4.jpg')

      ],
      currentImageIndex: 0
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    startCarousel() {
      this.interval = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 2000); 
    }
  }
};
</script>

<style scoped>
.carousel {
  padding: 10px;
  margin-top: 30px;
  padding-top: 80px;
  border-radius:30px;
  width: 100%;        
  height: 400px;        
  overflow: hidden;
  position: relative;
}

.carousel-image {
  width: 100%;
  border-radius:30px;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out; /* Hiệu ứng mờ dần */
}

.carousel-image {
  opacity: 1; /* Hiển thị ảnh hiện tại */
}
</style>
