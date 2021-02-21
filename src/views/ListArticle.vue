<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="文章标题" width="140"> </el-table-column>
      <el-table-column prop="body" label="文章内容"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
export default {
  methods: {
    /*
    :row-class-name="tableRowClassName"
    // eslint-disable-next-line no-unused-vars
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row"
      } else if (rowIndex === 3) {
        return "success-row"
      }
      return ""
    }*/
    fetch() {
      this.$http.get("articles").then(res => {
        this.articles = res.data
      })
    },
    edit(id) {
      this.$router.push(`/articles/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`articles/${id}`).then(res => {
        this.$message({
          message: "文章删除成功！",
          type: "success"
        })
        this.fetch()
      })
    }
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.fetch()
  }
}
</script>
