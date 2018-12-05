<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.items">
          <el-submenu :index="item.path" :key="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.label }}</span>
            </template>
            <template v-for="subItem in item.items">
              <el-submenu v-if="subItem.items" :index="subItem.path" :key="subItem.path">
                <template slot="title">{{ subItem.label }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.items"
                  :key="i"
                  :index="threeItem.path"
                >{{ threeItem.label }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.path" :key="subItem.path">{{ subItem.label }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" :key="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
import http from "../../utils/http";
import storage from "../../utils/storage";
export default {
  data() {
    return {
      collapse: false,
      url: "",
      items: [],
      routeres: []
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    this.getMenu(),
      // 通过 Event Bus 进行组件间通信，来折叠侧边栏
      bus.$on("collapse", msg => {
        this.collapse = msg;
      });
  },
  methods: {
    routeList(data) {
      let that = this;
      for (var i = 0; i < data.length; i++) {
        if (data[i].url) {
          that.routeres.push({
            path: "/" + data[i].path,
            component: resolve => require([".." + data[i].url], resolve),
            meta: {
              title: data[i].label
            }
          });
        }

        if (data[i].items) {
          this.routeList(data[i].items);
        }
      }
    },
    getMenu() {
      let that = this;
      that.$store
        .dispatch("getMenu")
        .then(res => {
          that.items = res;
          //that.routeList(that.items);
          //storage.remove("ROUTE_LIST");
         // storage.set("ROUTE_LIST", array);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
