/*
 * @Author: turingchang@outlook.com
 * @Date: 2019-09-27 14:37:55
 * @LastEditors: turingchang@outlook.com
 * @LastEditTime: 2019-09-27 18:58:03
 * @Description: 
 */
//轮播图
const getlunbo = [{
        img: "http://img0.imgtn.bdimg.com/it/u=1330758006,3235317658&fm=26&gp=0.jpg",
    },
    {
        img: "http://img4.imgtn.bdimg.com/it/u=2304743769,270118519&fm=26&gp=0.jpg",
    },
    {
        img: "http://img1.imgtn.bdimg.com/it/u=1741056971,2547499484&fm=26&gp=0.jpg",

    },
    {
        img: "http://img5.imgtn.bdimg.com/it/u=1215275655,2089380116&fm=26&gp=0.jpg",
    },
    {
        img: "http://img5.imgtn.bdimg.com/it/u=2558732860,836546731&fm=26&gp=0.jpg",
    }
]
// 新闻列表
const getnewslist = [{
        id:13,
        title:"等闲变却故人心",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"却道故人心易变",
        click:1,
        image_url:"http://img5.imgtn.bdimg.com/it/u=2558732860,836546731&fm=26&gp=0.jpg"
    },
    {
        id:14,
        title:"白了少年头",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"空悲切",
        click:1,
        image_url:"http://img5.imgtn.bdimg.com/it/u=1215275655,2089380116&fm=26&gp=0.jpg"
    },
    {
        id:15,
        title:"海内存知己",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"天涯若比邻",
        click:1,
        image_url:"http://img5.imgtn.bdimg.com/it/u=2558732860,836546731&fm=26&gp=0.jpg"
    }

]
// 图文资讯详情
const newsinfo = [{
        id:13,
        title:"忽如一夜春风来",
        click:2,
        add_time:"2015-04-16T03:50:28.000Z",
        content:"<p>却道故人心易变<p><img src='http://img4.imgtn.bdimg.com/it/u=2304743769,270118519&fm=26&gp=0.jpg'/>"
    },
    {
        id:14,
        title:"白云深处有人家",
        click:2,
        add_time:"2015-04-16T03:50:08.000Z",
        content:"<h3>白云深处有人家<h3>"
    },
    {
        id:15,
        title:"滚滚长江东逝水",
        click:2,
        add_time:"2015-04-16T03:50:58.000Z",
        content:"<h3>三国演义？<h3>"
    }
]
// 获取评论
const comments = [{
        user_name:"ohh",
        add_time:"2015-04-16T03:50:38.000Z",
        content:"我有一头小毛驴~"
    },
    {
        user_name:"匿名用户",
        add_time:"2015-04-16T03:50:28.000Z",
        content:"社会主义核心价值观~"
    }
]
//用于获取图片列表页面上面的分类信息获取
const getimgcategory = [
    {
        title:"居家生活",
        id:14
    },
    {
        title:"摄影科技",
        id:15
    },
    {
        title:"猫狗宠物",
        id:11
    },
    {
        title:"王者荣耀",
        id:16
    }

]
//用于获取点击首页上的“图片分享”后进入到的列表数据
const getimages = [
    {
        id:50,
        title:"居家生活",
        img_url:"http://img5.imgtn.bdimg.com/it/u=2558732860,836546731&fm=26&gp=0.jpg",
        zhaiyao:"打不过我吧，没有办法，我就是这么强大,打不过我吧，没有办法，我就是这么强大"
    },
    {
        id:30,
        title:"居家生活",
        img_url:"http://img1.imgtn.bdimg.com/it/u=1741056971,2547499484&fm=26&gp=0.jpg",
        zhaiyao:"打不过我吧，没有办法，我就是这么强大,打不过我吧，没有办法，我就是这么强大"
    },
    {
        id:25,
        title:"居家生活",
        img_url:"http://img4.imgtn.bdimg.com/it/u=2304743769,270118519&fm=26&gp=0.jpg",
        zhaiyao:"打不过我吧，没有办法，我就是这么强大,打不过我吧，没有办法，我就是这么强大"
    }
]
// 用于获取图片详情页面中的详细描述信息
const getimageInfo = [
    {
        id:50,
        title:"这个是图片标题啦卡卡卡卡卡卡卡",
        click:5,
        add_time:"2015-04-16T03:50:28.000Z",
        content:"<h3>三国演义？<h3>"
    },
    // {
    //     id:15,
    //     title:"这个是图片标题啦卡卡卡卡卡卡卡",
    //     click:5,
    //     add_time:"2015-04-16T03:50:28.000Z",
    //     content:"<h3>哈哈哈哈哈哈哈哈<h3>"
    // },
    // {
    //     id:16,
    //     title:"这个是图片标题啦卡卡卡卡卡卡卡",
    //     click:5,
    //     add_time:"2015-04-16T03:50:28.000Z",
    //     content:"<h3>啊啊啊啊啊啊啊<h3>"
    // }
]
// 用于获取图片详情页面上部的图片列表数据
const getthumimages = [
    {
        src:"http://img5.imgtn.bdimg.com/it/u=240144699,3799592432&fm=26&gp=0.jpg"
    },
    {
        src:"http://img5.imgtn.bdimg.com/it/u=1458091292,1380234255&fm=26&gp=0.jpg"
    },
    {
        src:"http://img0.imgtn.bdimg.com/it/u=3388228544,336304558&fm=26&gp=0.jpg"
    },
    {
        src:"http://img1.imgtn.bdimg.com/it/u=3606612164,1271213793&fm=26&gp=0.jpg"
    }
]
// 商品列表
const goodslist = [
    {
        id:87,
        title:"lallal",
        add_time:"2016-04-16T03:50:58.000Z",
        zhaiyao:"sssssssss",
        click:0,
        img_url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1582436154,22102138&fm=26&gp=0.jpg",
        sell_price:2195,
        market_price:2499,
        stock_quantity:60
     },
     {
        id:88,
        title:"hello",
        add_time:"2010-04-16T03:50:58.000Z",
        zhaiyao:"555555555555",
        click:0,
        img_url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1340593766,651620745&fm=26&gp=0.jpg",
        sell_price:2000,
        market_price:2699,
        stock_quantity:60
     },
     {
        id:89,
        title:"YOU",
        add_time:"2019-04-16T03:50:58.000Z",
        zhaiyao:"fsdfsadfsadfsadf",
        click:0,
        img_url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4187639074,4055565914&fm=26&gp=0.jpg",
        sell_price:2595,
        market_price:2499,
        stock_quantity:60
     },
     {
        id:90,
        title:"OURXXXXX",
        add_time:"2018-04-16T03:50:58.000Z",
        zhaiyao:"dsfsdfsdfsdffdhfgjhgfj",
        click:0,
        img_url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3115460607,2889906714&fm=15&gp=0.jpg",
        sell_price:2195,
        market_price:49999,
        stock_quantity:60
     },
     {
        id:81,
        title:"SSSSS",
        add_time:"2011-04-16T03:50:58.000Z",
        zhaiyao:"ssssssgfdgfgfdhgdfhfgcbvcsss",
        click:0,
        img_url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1493496074,904758959&fm=15&gp=0.jpg",
        sell_price:2420,
        market_price:2999,
        stock_quantity:60
     }
]
// 商品信息
const getinfo = [
    {
        id:101,
        title:"小爱音箱",
        add_time:"2015-04-16T03:50:58.000Z",
        goods_no:"SD3973042344",
        stock_quantity:60,
        market_price:2999,
        sell_price:199
    },
    {
        id:100,
        title:"天猫精灵",
        add_time:"2016-04-16T03:50:58.000Z",
        goods_no:"SD3973042345",
        stock_quantity:62,
        market_price:3999,
        sell_price:192
    },
    {
        id:101,
        title:"人工智障",
        add_time:"2005-04-16T03:50:58.000Z",
        goods_no:"SD3973042644",
        stock_quantity:79,
        market_price:999,
        sell_price:99
    }
]
//商品图文介绍
const getdesc = [
    {
        title:"小米ssss",
        content:"<p>sdfsdfsdbdfbfdbfbfdbfdbfd</p><img src='http://img4.imgtn.bdimg.com/it/u=2304743769,270118519&fm=26&gp=0.jpg'/>"
    }
]
// 购物车
const getshopcarlist = [
    {
        cou:1,
        id:87,
        title:"lallal",
        sell_price:2195,
        thumb_path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1582436154,22102138&fm=26&gp=0.jpg"
    },
    {
        cou:1,
        id:88,
        title:"hello",
        sell_price:2000,
        thumb_path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1340593766,651620745&fm=26&gp=0.jpg"
    },
    {
        cou:1,
        id:89,
        title:"OURXXXXX",
        sell_price:2595,
        thumb_path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4187639074,4055565914&fm=26&gp=0.jpg"
    }
]
export default {
    getlunbo,
    getnewslist,
    newsinfo,
    comments,
    getimgcategory,
    getimages,
    getimageInfo,
    getthumimages,
    goodslist,
    getinfo,
    getdesc,
    getshopcarlist
}