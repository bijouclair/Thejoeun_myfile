$(function(){

    // header sticky
    // window를 스크롤 했을 때 
    // 만약 스크롤 값 > 50 경우
    // #header .sticky 추가
    // 만약 스크롤값 <50  경우
    // #header .sticky 삭제

    $(window)
    .scroll(function(){
        if($(this).scrollTop() > 50){
            $('#header').addClass('sticky')    
        }
        else{
            $('#header').removeClass('sticky')
        }
    })
    .trigger('scroll')

    // 메뉴 클릭시 해당 해시태그로 애니메이션 되면서 이동
    // #collapsibleNavbar .nav-link를 클릭했을 때
    // a 링크 기능 없애고
    // 만약 링크에 해시태그가 비어있지 않다면 (있다면)
    // html, body태그를 animate 시켜줘
    // scrollTop() : $(해시태그).offset().top

    $( '#collapsibleNavbar .nav-link').click(function(event){
        event.preventDefault()
        if(this.hash !==""){
            
            let hash = this.hash;

            $('html, body').animate ({
                scrollTop : $(hash).offset().top -56
            }, 1000)

        }
    })

    // scrollUp 
    $.scrollUp({
        scrollText: '페이지 위로', // Text for element, can contain HTML
    });

    // wow.js
    new WOW().init();

   

    // objects animation 
    // window.scroll (윈도우를 스크롤 했을때)
    // .ani-slide each (.ani-slide 를 각각 잡아서)
    // if scroll > .ani-slide each (만약 스크롤 값보다 .ani-slide 각각의 위치값이 크다면)
    // (.ani-slide가 화면 안으로 들어왔을 때)
    // .ani-top addClass (.ani-top 클래스 추가)


    $(window).scroll(function(){
        $('.ani-slide').each(function(){

            let winscroll = $(window).scrollTop(),
            pos =  $(this).offset().top

            if(winscroll + 700 > pos){
                $(this).addClass('ani-top')
            }
        })
    })

    // slide-top
    var swiper = new Swiper('.slide-top', {
        // slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // slide-sns
     var swiper = new Swiper('.slide-sns', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    
})