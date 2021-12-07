<template>
  <header class="bg-blue-500 text-white py-3">
    <div class="container">
      <div class="flex justify-between">
        <router-link to="/">Home</router-link>
        <nav>
          <ul class="flex">
            <li>
              <router-link to="/entry-create">Create Entry</router-link>
            </li>
            <li class="ml-3">
              <router-link to="/client-create">Create Client</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
