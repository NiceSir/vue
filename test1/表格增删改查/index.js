var app=new Vue({
    el:"#app",
    data:{
        list:[{
            name:"电子产品",
            products:[
            {
                id:1,
                name:"iphone 7",
                price: 7199,
                count:1,
                pick:false
            },
            {
                id:2,
                name:"ipad",
                price: 2888,
                count:1,
                pick:false
            },
            {
                id:3,
                name:"MacBook Pro",
                price:21488,
                count:1,
                pick:false
            }
          ],
            thosePick:false
        },
            {
            name:"生活必需",
                products:[
                {
                    id:1,
                    name:"paper",
                    price: 16,
                    count:1,
                    pick:false
                },
                {
                    id:2,
                    name:"toothbrush",
                    price:8,
                    count:1,
                    pick:false
                },
            ],
                thosePick:false
            },
            {name:"水果",
                products:[
                {
                    id:1,
                    name:"apple",
                    price: 4,
                    count:1,
                    pick:false
                },
                {
                    id:2,
                    name:"banana",
                    price:3,
                    count:1,
                    pick:false
                },
            ],
                thosePick:false
            }
            ],
        allPick:false,
    },
    computed:{
        totalPrices:function () {
            var total=0;
            var a=this.list;
            for (var i=0;i<a.length;i++){
                var t=a[i].products;
                for(var j=0;j<t.length;j++)
                if(t[j].pick===true){
                    total+=t[j].price*t[j].count;
                }
            }
            return total.toString().replace(/\B(?=(\d{3})$)/g,',');
        }
    },
    methods:{
        //减号
        handleReduce:function (index,tindex) {
            var a=this.list[tindex].products[index];
            if(a.count===1) return;
            a.count--;
        },
        //加号
        handleAdd:function (index,tindex) {
            var a=this.list[tindex].products[index];
            a.count++;
        },
        //删除按钮
        handleRemove:function (index,tindex) {
            var a=this.list[tindex].products;
            a.splice(index,1);
        },
        //监听全局全选按钮
        allChoose:function () {
            var _this=this;
            var p=_this.list;
            //点击事件触发时allPick还没有改变（即allPick为点击前的值）
            if(_this.allPick===true){
                for(var i=0;i<p.length;i++){
                    p[i].thosePick=false;
                    for(var j=0;j<p[i].products.length;j++){
                        p[i].products[j].pick=false;
                    }
                }
            }else{
                for(var i=0;i<p.length;i++){
                    p[i].thosePick=true;
                    for(var j=0;j<p[i].products.length;j++){
                        p[i].products[j].pick=true;
                    }
                }
            }
        },
        //监听某系列产品全选按钮
        thoseChoose:function (index) {
            var _this=this;
            var p=_this.list[index];
                if(p.thosePick===true){
                    for(var j=0;j<p.products.length;j++){
                        p.products[j].pick=false;
                 }
                }else {
                    for (j = 0; j < p.products.length; j++) {
                        p.products[j].pick = true;
                    }
                }

        }
        //计算选中商品的总价
        // allCount:function () {
        //     var a=this.list;
        //     for (var i=0;i<a.length;i++){
        //         if(a[i].pick==true){
        //             this.totalPrices()+=a[i].price*a[i].count;
        //         }
        //     }
        // }
    }
})