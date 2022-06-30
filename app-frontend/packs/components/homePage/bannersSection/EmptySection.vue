<template>
  <div>
    <p class="ba-empty-description">Banners not yet created<br>Create a banner</p>
    <div class="ba-empty-svg">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 120 120" fill="none">
        <path
            d="M80.625 55.3125C82.1625 55.3125 83.4375 56.5875 83.4375 58.125C83.4375 59.6625 82.1625 60.9375 80.625 60.9375C79.0875 60.9375 77.8125 59.6625 77.8125 58.125C77.8125 56.5875 79.0875 55.3125 80.625 55.3125Z"
            fill="#A5A5A5"/>
        <path
            d="M39.375 55.3125C40.9125 55.3125 42.1875 56.5875 42.1875 58.125C42.1875 59.6625 40.9125 60.9375 39.375 60.9375C37.8375 60.9375 36.5625 59.6625 36.5625 58.125C36.5625 56.5875 37.8375 55.3125 39.375 55.3125Z"
            fill="#A5A5A5"/>
        <path d="M80.625 5.625H16.875V114.375H103.125V28.125" stroke="#A5A5A5" stroke-miterlimit="10"
              stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M80.625 5.625L103.046 28.125H80.625V15" stroke="#A5A5A5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M54.375 69.375C54.375 66.2625 56.8875 63.75 60 63.75C63.1125 63.75 65.625 66.2625 65.625 69.375"
              stroke="#A5A5A5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M77.8125 58.125C77.8125 59.6625 79.0875 60.9375 80.625 60.9375C82.1625 60.9375 83.4375 59.6625 83.4375 58.125C83.4375 56.5875 82.1625 55.3125 80.625 55.3125C79.0875 55.3125 77.8125 56.5875 77.8125 58.125Z"
            stroke="#A5A5A5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M42.1875 58.125C42.1875 59.6625 40.9125 60.9375 39.375 60.9375C37.8375 60.9375 36.5625 59.6625 36.5625 58.125C36.5625 56.5875 37.8375 55.3125 39.375 55.3125C40.9125 55.3125 42.1875 56.5875 42.1875 58.125Z"
            stroke="#A5A5A5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M80.625 5.625H16.875V114.375H103.125V28.125" stroke="#A5A5A5" stroke-miterlimit="10"
              stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M80.625 5.625L103.046 28.125H80.625V15" stroke="#A5A5A5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M54.375 69.375C54.375 66.2625 56.8875 63.75 60 63.75C63.1125 63.75 65.625 66.2625 65.625 69.375"
              stroke="#A5A5A5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M77.8125 58.125C77.8125 59.6625 79.0875 60.9375 80.625 60.9375C82.1625 60.9375 83.4375 59.6625 83.4375 58.125C83.4375 56.5875 82.1625 55.3125 80.625 55.3125C79.0875 55.3125 77.8125 56.5875 77.8125 58.125Z"
            stroke="#A5A5A5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M42.1875 58.125C42.1875 59.6625 40.9125 60.9375 39.375 60.9375C37.8375 60.9375 36.5625 59.6625 36.5625 58.125C36.5625 56.5875 37.8375 55.3125 39.375 55.3125C40.9125 55.3125 42.1875 56.5875 42.1875 58.125Z"
            stroke="#A5A5A5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptySection"
}
</script>

<style scoped>
.ba-empty-description {
  text-align: center;
  line-height: initial;
  color: #A5A5A5;
  font-size: 20px;
}

.ba-empty-svg {
  display: flex;
  justify-content: center;
}
</style>
