$(function(){

    // header sticky
    // window를 스크롤 했을 때 
    // 만약 스크롤 값 > 50 경우
    // #header .sticky 추가
    // 만약 스크롤값 <50  경우
    // #header .sticky 삭제

    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $('#header').addClass('sticky')    
        }
        else{
            $('#header').removeClass('sticky')
        }
    })

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
    
})