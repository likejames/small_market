<template>
  <div>
    <div class="infinite-list-wrapper">
      <el-row>
        <el-col :span="4" v-for="(item) in tabledata" :key="item.classId" :offset="1">
          <div style="margin-top:15px">
            <el-card :body-style="{ padding: '0px'}" shadow="hover">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                   class="image">
              <div>
                <span>{{ item.classId }}级{{ item.date }}系{{ item.address }}班</span><br>
                <div class="bottom clearfix">
                  <time class="time"><strong>创建时间:</strong>{{ item.date }}</time>
                  <el-button type="text" class="button" @click="add(item)">查看</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
<!--      <div style="margin-left:35%">-->
<!--        <div class="block">-->
<!--          <el-pagination-->
<!--              @size-change="handleSizeChange"-->
<!--              @current-change="handleCurrentChange"-->
<!--              :current-page="current_page"-->
<!--              :page-sizes="[4,8, 12, 16]"-->
<!--              :page-size="pagesize"-->
<!--              layout="total, sizes, prev, pager, next"-->
<!--              :total="total">-->
<!--          </el-pagination>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      tabledata: [{
        date: '2016-05-03',
        classId: 1,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        classId: 2,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        classId: 3,
        address: '上海市普陀区金沙江路 1518 弄'
      },
        {
          date: '2016-05-03',
          name: '王小虎',
          classId: 4,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          classId: 5,
          address: '上海市普陀区金沙江路 1518 弄'
        }]
    }
  }
}
</script>

<style scoped>
.infinite-list-wrapper {
  position: absolute;
  top: 600px;
  text-align: center;
}
</style>