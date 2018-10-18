import Vue from 'vue'
import Router from 'vue-router'
import {Message} from 'element-ui'
import post from '@/components/post'
import postEdit from '@/components/postEdit'
import shenhePost from '@/components/shenhePost'
// import modal from '@/components/plug/modal'
// import loading from '@/components/plug/loading'

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

  ],
  linkActiveClass: 'active',
  linkExactActiveClass: '',
})

export default router;

router.beforeEach((to, from, next)=>{
  //console.log(to);
  let isNeedlogin = to.meta.isNeedlogin;
  let path = to.name;

  next();

})
