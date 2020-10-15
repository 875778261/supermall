<template>
  <div v-if="Object(commentInfo).length !== 0" class="comment">
    <div class="title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-info">
      <div class="top">
        <img v-if="commentInfo.user" :src="commentInfo.user.avatar" />
        <span v-if="commentInfo.user">{{ commentInfo.user.uname }}</span>
      </div>

      <div class="middle">
        <p>{{ commentInfo.content }}</p>
        <div class="middle-bottom">
          <span>{{ commentInfo.created | showDate }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
      </div>

      <div class="bottom">
        <img
          :src="item"
          v-for="(item, indey) in commentInfo.images"
          :key="indey"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "",
  
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      //将时间戳转换为Date对象
      const date = new Date(value * 1000);
      //将date格式化
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>
<style scoped>
.comment {
  border-bottom: 5px solid #f2f5f8;
  padding: 20px 15px;
}
.title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 3px solid #f2f5f8;
  color: black;
}
.title span {
}
.comment-info {
  margin-top: 10px;
}
.top {
  line-height: 50px;
  display: flex;
}
.top img {
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 45px;
  height: 45px;
}
.top span {
  margin-left: 10px;
  font-size: 18px;
  color: black;
}
.middle {
  margin-top: 15px;
}
.middle-bottom {
  margin-top: 12px;
}
.bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.bottom img {
  margin: 15px 3px 5px;
  width: 100px;
  height: 100px;
}
</style>