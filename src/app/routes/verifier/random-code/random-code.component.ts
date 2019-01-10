import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-verifier-random-code',
  templateUrl: './random-code.component.html',
})
export class VerifierRandomCodeComponent implements OnInit {
  imgUrl = '';
  randomCode = [];

  constructor(private http: _HttpClient) {}

  ngOnInit() {
    this.draw();
  }

  // 生成并渲染出验证码图形
  draw() {
    // 创建canvas dom
    const canvas = document.createElement('canvas');
    canvas.height = 50;
    canvas.width = 150;
    // 获取canvas画图的环境
    const ctx = canvas.getContext('2d');
    // 随机内容
    const sCode =
      'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0';
    const aCode = sCode.split(',');
    // 获取到数组长度
    const aLength = aCode.length;

    ctx.fillStyle = this.randomColor();
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
    for (let i = 0; i < 4; i++) {
      // 获取到随机的索引值
      const j = Math.floor(Math.random() * aLength);
      // 产生一个随机弧度
      const deg = Math.random() - 0.5;
      // 得到随机的一个内容
      const txt = aCode[j];
      this.randomCode[i] = txt;
      // 文字在 canvas 上的 x 坐标
      const x = 20 + i * 30;
      // 文字在 canvas 上的 y 坐标
      const y = 30 + Math.random() * 8;

      ctx.font = `bold 32px 微软雅黑`;
      ctx.translate(x, y);
      ctx.rotate(deg);
      ctx.fillStyle = this.randomColor();
      ctx.fillText(txt, 0, 0);
      ctx.rotate(-deg);
      ctx.translate(-x, -y);
    }

    // 干扰线条
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = this.randomColor();
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // 干扰点
    for (let i = 0; i < 50; i++) {
      ctx.strokeStyle = this.randomColor();
      ctx.beginPath();
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.moveTo(x, y);
      ctx.lineTo(x + 1, y + 1);
      ctx.stroke();
    }

    // canvas 图 转 64位编码
    this.imgUrl = canvas.toDataURL();
  }

  // 得到随机色
  randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
