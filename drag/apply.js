const app = getApp();

Page({
    data: {
        progressBarW: '0',
        startPointX: 0,
        windowW: 0,
        paddingL: 0
    },
    onLoad: function() {
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    windowW: res.windowWidth
                });

            }
        });
    },
    dragTouchstart: function(e) {
        let x = e.touches[0].pageX;

        this.setData({
            paddingL: (this.data.windowW - 260) / 2
        });
    },
    dragTouchmove: function(e) {
        let x = e.touches[0].pageX;

        console.log((x-this.data.paddingL ) / 260);


        // this.setData({
        //     startPointX: ((x-this.data.paddingL ) / 260) * 100
        // });

        if((x-this.data.paddingL ) / 260 <= 0) {
            this.setData({
                startPointX: 0
            });
        } else if((x-this.data.paddingL ) / 260  >= 1)  {
            this.setData({
                startPointX: 100
            });
        } else {
            console.log("a");
            this.setData({
                startPointX: ((x-this.data.paddingL ) / 260) * 100
            });
        }



    }
});
