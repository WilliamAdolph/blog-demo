<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form action="" v-if="!submmited">
      <label for="">博客标题</label>
      <input type="text" v-model="blog.title" required />

      <label for="">博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="">vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories">
        <label for="">node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories">
        <label for="">react.js</label>
        <input type="checkbox" value="react.js" v-model="blog.categories">
        <label for="">angular4.js</label>
        <input type="checkbox" value="angular4.js" v-model="blog.categories">
      </div>
      <label for="">作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">编辑博客</button>
    </form>

    <div v-if="submmited">
      <h3>您的博客发布成功！</h3>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{category}}
        </li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ['william','adolph','vincy'],
      submmited:false
    }
  },
  methods: {
    post() {
      this.$http.put('https://my-blog-ca0de.firebaseio.com/posts/' + this.id + ".json",this.blog)
      .then(function(data){
        console.log(data);
        this.submmited=true;
      });
    },
    fetchData() {
      // console.log(this.id);
      this.$http.get('https://my-blog-ca0de.firebaseio.com/posts/' + this.id + ".json")
      .then(response => {
        // console.log(response.body);
        this.blog = response.body;
      })
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style lang="" scoped>
  #add_blog {
    box-sizing: border-box;
  }
  #add_blog {
    margin: 20px auto;
    max-width:60px;
    padding: 20px;
  }
  label {
    display: block;
    margin:20px 0 10px;
  }
  input[type="text"],textarea,select{
    display:block;
    width:100%;
    padding:8px;
  }
  textarea{
    height: 200px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0;
  }
  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }
  button {
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
</style>