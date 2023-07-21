<template>
  <IntroHeader />
  <div class="container flex gap-6 items-start justify-between">
    <div class="w-full">
      <div class="flex border-b border-gray-300 mb-4 w-full">
        <span
          v-for="feed in feeds.list"
          :key="feed.id"
          :class="{ 'border-b border-b-green-1': feeds.active === feed.id }"
          class="active mr-4 p-4 -mb-px cursor-pointer"
          @click="feeds.active = feed.id"
        >
          {{ feed.titlle }}
        </span>
      </div>

      <ArticlesFeed :feedType="feeds.active" />
    </div>
    <PopularTag />
  </div>
</template>

<script lang="ts" setup>
import IntroHeader from "./components/IntroHeader.vue";
import PopularTag from "./components/PopularTag.vue";
import ArticlesFeed from "./components/ArticlesFeed.vue";

import { useUserStore } from "~/features/user/useUserStore";

const userStore = useUserStore();
const feeds = reactive({
  list: [
    ...(userStore.isUserLogin ? [{ titlle: "Your Feed", id: "yourFeed" }] : []),
    { titlle: "Global Feed", id: "globalFeed" },
  ],
  active: userStore.isUserLogin ? "yourFeed" : "globalFeed",
});
</script>
