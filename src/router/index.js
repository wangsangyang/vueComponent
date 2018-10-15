import Vue from 'vue'
import Router from 'vue-router'
import {Message} from 'element-ui'
import post from '@/components/post'
import postEdit from '@/components/postEdit'
import shenhePost from '@/components/shenhePost'
import modal from '@/components/modal'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: post
    },
    {
      path: '',
      redirect: post
    },
    {
      path: '/post',
      name: 'post',
      component: post,
      meta: {
        isNeedlogin: true,//是否需要登录，true：需要登录，false：不需要登录
        isNeedNav: true,//是否需要显示pageHeader头、pageNav左导航，true：需要，false：不需要
        isChildren: false
      },
      children: [
        {
          path: 'edit',
          name: 'postEdit',
          component: postEdit,
          meta: {
            isNeedlogin: true,//是否需要登录，true：需要登录，false：不需要登录
            isNeedNav: true,//是否需要显示pageHeader头、pageNav左导航，true：需要，false：不需要
            isChildren: true
          },
        }
      ]
    },
    {
      path: '/shenhePost',
      name: 'shenhePost',
      component: shenhePost,
      meta: {
        isNeedlogin: true,
        isNeedNav: true,
        navActive: 'shenhePost'
      }
    },
    {
      path: '/modal',
      name: 'modal',
      component: modal,
      meta: {
        isNeedlogin: false,
        isNeedNav: false,
      }
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: '',
})

export default router;

router.beforeEach((to, from, next)=>{
  //console.log(to);
  let isNeedlogin = to.meta.isNeedlogin;
  let path = to.name;
  let quanxianState = localStorage.getItem('quanxianState');

  let loginTimestamp = localStorage.getItem('lastLoginTimestamp');
  let nowTime = new Date().getTime();
  let isLoginTimeout = (nowTime-loginTimestamp)>2*60*60*1000;//大于2小时：说明登录超时
  //console.log(quanxianState);
  //console.log(nowTime-loginTimestamp);
  //console.log((nowTime-loginTimestamp)>10*1000);
  next();

})
