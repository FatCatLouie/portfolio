'use strict';
const skills = {
    data: [
        {
            name: 'HTML',
            lvl: 40,
            class: 'skill-html'
        },
        {
            name: 'CSS',
            lvl: 30,
            class: 'skill-css'
        },
        {
            name: 'C++',
            lvl: 60,
            class: 'skill-cpp'
        },
        {
            name: 'Python',
            lvl: 90,
            class: 'skill-python'}
    ],
    generateList: function () {
        skillList.innerHTML = '';
        this.data.forEach(item=>{
            let dt = document.createElement('dt');
            let dd = document.createElement('dd');
            let div = document.createElement('div');
            dt.classList.add(item.class);
            dd.classList.add('level');
            dt.textContent=item.name;
            dd.textContent=`${item.lvl}%`;
            div.style.width = `${item.lvl}%`;
            dd.append(div);
            skillList.append(dt);
            skillList.append(dd);
        });
    }
}

const skillList = document.querySelector('.skills-list'),
    buttons = document.querySelector('.skills div');
let sort = true;
let tag = 'name';


skills.generateList();

buttons.addEventListener('click', e =>{
    if (e.target.tagName=='BUTTON') {
        if (e.target.dataset.mode=='l') tag = 'lvl';
        else tag = 'name';
        if (sort) skills.data.sort(sorting);
        else skills.data.sort(sortingRev);
        sort = !sort;
        skills.generateList();
    }
})

function sorting(a, b) {
    if (a[tag]<b[tag]) return -1;
    if (a[tag]>b[tag]) return 1;
    return 0;
}
function sortingRev(a, b) {
    if (a[tag]<b[tag]) return 1;
    if (a[tag]>b[tag]) return -1;
    return 0;
}











//далее из курсовой
var stepTime=500;
var pie_chart={
    params:{	
    zagolovok:"Заголовок",
    colors: ["#60F5DF","#CDDEF7","#8A5EF2","#FABBEF","#57F246","#B3F5E3","#F2672E","#F5D79A","#F2E53A","#B8F5A6","#BFF51B","#FA3947"],
    stroke_color: "black",
    stroke_width: 0.015,//доля от радиуса круга
    ramka_width:0.01,
    ramka_angles:0.05,
    signs: ["Текст1","Очень длинный Текст2","Текст3","Текст4","Текст5","Текст6","Текст7","Текст8","Текст9","Текст10","Текст11","Текст12"],//важно для количества областей//
    sign_space:2, //1-справа, 2-на диаграмме
    b_window:[50,50],
    stepT:stepTime,
    background_color:"#FFFFFF",
    ramka : [{"color": "#8446a3",
            "offset": "0%"},
            {"color": "#c389e0",
            "offset": "75%"},
            {"color": "#8446a3",
            "offset": "100%"}] 
    }
    };
var graf={
    params:{	
        max:100,  //точное значение
        min:0,  //примерное значение
        stepT:stepTime,
        ramka_width:0.005,
        ramka_angles:0.03,
        gorLineCnt:10,  //количество промежутков между горизонтальными линиями
        vert_space_up:0.2,
        vert_space_down:0.25,
        gor_space:0.1,
        stroke_width: 0.003,
        graph_stroke_width: 0.004,
        radius:2.5,  //от graph_stroke_width
        cnt_po_x:10,  //количество точек времени на горизонтальной оси
        b_window:[600,500],
        zagolovok: "Заголовок",
        background_color:"#FFFFFF",
        lines_color: "#B0B0B0",
        strelki_color:"#f54425",
        text_color:"#444444",
        graph_color:"#000230",
        ramka_color: [{"color": "#84c272",
            "offset": "0%"},
            {"color": "#c1f0b4",
            "offset": "75%"},
            {"color": "#84c272",
            "offset": "100%"}],
        date_format: {"day":0,"month":0,"year": 0,"hour":0,"minute":0,"second":1,"millisecond":1}
    }
    };
var bar_chart={
    params:{	
    zagolovok:"Заголовок",
    colors: ["#60F5DF","#CDDEF7","#8A5EF2","#FABBEF","#57F246","#B3F5E3","#F2672E","#F5D79A","#F2E53A","#B8F5A6","#BFF51B","#FA3947"],
    text_color:"black",
    stroke_width: 0.04,//доля ширины столбиков
    ramka_width:0.01,
    ramka_angles:0.05,
    signs: ["1","Длинный текст","Текст3","Текст4","Текст5","Текст6","Текст7","Текст8","Текст9","Текст10","Текст11","Текст12"],//важно для количества областей//
    data_designation:3, //1-в процентах, 2-настоящие значения, 3-без обозначения
    sign_space:2, //1-справа, 2-снизу
    b_window:[800,500],
    stepT:stepTime,
    stroke_color:"#000000",
    background_color:"#FFFFFF",
    ramka : [{"color": "#4b93eb",
            "offset": "0%"},
            {"color": "#acd0fc",
            "offset": "75%"},
            {"color": "#4b93eb",
            "offset": "100%"}] 
    }

    };
initPribor("Pie_chart",pie_chart);
initPribor("Bar_chart",bar_chart);
initPribor("str",graf);
var I={data1:100,data2:60,data3:70,data4:80,data5:90,data6:50,data7:100,data8:60,data9:70,data10:80,data11:90,data12:500};
var I2={data:50};
var tm=new Date();		
function new_t(){
    I.data1+=(Math.random()*20);I.data2+=(Math.random()*20);I.data3+=(Math.random()*5);I.data4+=(Math.random()*30);I.data5+=(Math.random()*40);I.data6+=(Math.random()*10);I.data7+=(Math.random()*40);I.data8+=(Math.random()*18);I.data9+=(Math.random()*15);I.data10+=(Math.random()*2);I.data11+=(Math.random()*10);I.data12+=(Math.random()*15);
    I2.data+=((Math.random()-0.5)*20);
    tm.setTime(tm.getTime()+stepTime);		
    I.DateTime=tm;
    I2.DateTime=tm;
    if(pie_chart.view!==undefined){
    pie_chart.view.work(I);			
    }
    if(bar_chart.view!==undefined){
        bar_chart.view.work(I);			
    }
    if(graf.view!==undefined){
        graf.view.work(I2);			
        }
}
setInterval("new_t()", stepTime);