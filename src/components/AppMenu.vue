<template>
  <header class="bg-blue-500 text-white py-3">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <router-link to="/">Home</router-link>
        <nav>
          <ul class="flex">
            <li>
              <router-link to="/entry-create">Create</router-link>
            </li>
            <li class="ml-2">
              <router-link to="/time">Time</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts"></script>

<style scoped></style>
