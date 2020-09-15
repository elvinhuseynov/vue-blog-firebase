<template>
  <form @submit.prevent="onSubmit">
    <div class="wrapper">
      <div class="title">
        <h1>New post</h1>
      </div>
      <div class="contact-form">
        <div class="input-fields">
          <input type="text" v-model="post.author" class="input" placeholder="Author" />
          <input
            type="text"
            v-model="post.contentHeader"
            class="input"
            placeholder="Content header"
          />
          <input type="text" v-model="post.imgUrl" class="input" placeholder="Url for image" />
        </div>
        <div class="msg">
          <textarea v-model="post.content" placeholder="Content"></textarea>
          <button type="submit" @click="contentSmaller" class="btn">send</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: {
        author: "",
        contentHeader: "",
        imgUrl: "",
        content: "",
        contentSmall: "",
        date: "",
      },
    };
  },
  methods: {
    contentSmaller() {
      var d = new Date();

      var date = d.getDate();
      var month = d.getMonth() + 1;
      var year = d.getFullYear();

      var dateStr = date + "/" + month + "/" + year;
      dateStr.toString();
      this.post.date = dateStr;

      this.post.contentSmall = this.post.content.substr(0, 40);

    },
    onSubmit() {
      this.post.postURLname = this.post.contentHeader.replace(/\s/g, '');
      axios
        .post("https://blog-with-vue-f17e7.firebaseio.com/cards.json", {
          ...this.post,
        })
        .then((response) => {
          this.post = {};
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");

* {
  box-sizing: border-box;
  outline: none;
  font-family: "Roboto", sans-serif;
}

.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 550px;
  background: rgba(0, 0, 0, 0.8);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.wrapper .title h1 {
  color: #c5ecfd;
  text-align: center;
  margin-bottom: 25px;
}

.contact-form {
  display: flex;
}

.input-fields {
  display: flex;
  flex-direction: column;
  margin-right: 4%;
}

.input-fields,
.msg {
  width: 48%;
}

.input-fields .input,
.msg textarea {
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid #c5ecfd;
  padding: 10px;
  color: #c5ecfd;
  width: 100%;
}

.msg textarea {
  height: 212px;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #c5ecfd;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #c5ecfd;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #c5ecfd;
}

.btn {
  background: #39b7dd;
  text-align: center;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  .contact-form {
    flex-direction: column;
  }
  .msg textarea {
    height: 80px;
  }
  .input-fields,
  .msg {
    width: 100%;
  }
}
</style>