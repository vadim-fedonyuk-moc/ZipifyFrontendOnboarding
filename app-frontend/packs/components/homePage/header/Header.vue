<template>
  <div>
    <ProjectBanner/>
    <div class="ba-header">
      <h1 class="ba-header__logo">LOGO.</h1>
      <router-link to="/edit">
        <button class="ba-header__create " type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 38 38" fill="none">
            <path
                d="M7.5 0C3.37744 0 0 3.37744 0 7.5V30C0 34.1226 3.37744 37.5 7.5 37.5H30C34.1226 37.5 37.5 34.1226 37.5 30V7.5C37.5 3.37744 34.1226 0 30 0H7.5ZM7.5 3.75H30C32.1099 3.75 33.75 5.39006 33.75 7.5V30C33.75 32.1099 32.1099 33.75 30 33.75H7.5C5.39006 33.75 3.75 32.1099 3.75 30V7.5C3.75 5.39006 5.39006 3.75 7.5 3.75Z"
                fill="white"/>
            <path
                d="M18.75 7.49927C18.2527 7.49927 17.7758 7.69678 17.4242 8.04841C17.0725 8.40004 16.875 8.87699 16.875 9.37427V16.8743H9.375C8.87772 16.8743 8.40081 17.0718 8.04918 17.4234C7.69754 17.775 7.5 18.252 7.5 18.7493C7.5 19.2465 7.69754 19.7234 8.04918 20.0751C8.40081 20.4267 8.87772 20.6243 9.375 20.6243H16.875V28.1243C16.875 28.6215 17.0725 29.0984 17.4242 29.4501C17.7758 29.8017 18.2527 29.9993 18.75 29.9993C19.2473 29.9993 19.7242 29.8017 20.0758 29.4501C20.4275 29.0984 20.625 28.6215 20.625 28.1243V20.6243H28.125C28.6223 20.6243 29.0992 20.4267 29.4508 20.0751C29.8025 19.7234 30 19.2465 30 18.7493C30 18.252 29.8025 17.775 29.4508 17.4234C29.0992 17.0718 28.6223 16.8743 28.125 16.8743H20.625V9.37427C20.625 8.87699 20.4275 8.40004 20.0758 8.04841C19.7242 7.69678 19.2473 7.49927 18.75 7.49927Z"
                fill="white"/>
          </svg>
          Create
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProjectBanner from "../../sharedComponents/ProjectBanner";

export default {
  name: "Header",
  components: {ProjectBanner}
}
</script>

<style scoped>
.ba-header {
  position: relative;
  justify-content: center;
  display: flex;
}

.ba-header__logo {
  position: absolute;
  left: 40px;
  top: 10px;
  font-weight: 600;

}

.ba-header__create {
  margin: 20px;
  width: 150px;
  height: 37px;
  border: none;
  background-color: var(--color-violet);
  color: var(--color-white);
  border-radius: 5px;
  font-size: 28px;
}
</style>
