const quotes = [
    {
    quote: '때론 기회를 놓치는 것이 기회일 수 있다.',
    author: '<영화>벤자민 버튼의 시간은 거꾸로 간다.'
    },
    {
    quote: '영원히 살 것처럼 꿈꾸고, 오늘 죽을 것처럼 살아라.',
    author: '제임스 딘'
    },
    {
    quote: '아침에 눈을 떠서 어제보다 나은 하루를 만들지 않으면, 실패한 것이다. ',
    author: '로버트 나델리'
    },
    {
    quote: '인생은 스스로 알아서 하지 않으면 아무도 아무것도 가르쳐 주지 않는다. ',
    author: '빌게이츠'
    },
    {
    quote: '나는 기회를 놓쳤다 생각했는데, 우리는 이를 만회하기 위하여 더욱 열심히 일을 했습니다. ',
    author: '스티브 잡스'
    },
    {
    quote: '나는 내가 더 노력할 수록 운이 더 좋아진다는 것을 발견했다. ',
    author: '토마스 제퍼슨'
    },
    {
    quote: '동기부여가 당신을 시작하게 한다. 습관이 당신을 계속 움직이게 한다. ',
    author: '크리스 그로서'
    },
    {
    quote: '희망이 있는 곳에 반드시 시련이 있는 법이다.',
    author: '무라카미 하루키'
    },
    {
    quote: '인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다. ',
    author: '롤리 다스칼'
    },
    {
    quote: '성공으로 가는 길과 실패로 가는 길은 거의 똑같다. ',
    author: '콜린 R. 데이비스'
    },
    {
    quote: '패배의 공포가 승리의 짜릿함보다 커지게 하지마라. ',
    author: '로버트 기요사키'
    },
    {
    quote: '세상에서 가장 중요한 일들 대부분은 아무도 도와주지 않을 때에도 계속 노력한 사람들에 의해 이루어졌다. ',
    author: '데일 카네기'
    },
    {
    quote: '진짜 어려움은 극복할 수 있다. 정복할 수 없는 것은 상상속의 어려움들 뿐이다. ',
    author: '시어도어 N. 베일 '
    },
    {
    quote: '문제가 생기면 항상 원점으로 돌아가라. 모든 것은 근본을 찾아서 해결해야한다.',
    author: '이건희'
    },
    ];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]; //floor은 정수로 내림하는 명령어로, random한 수 * 10을 담당한다.
// quotes 안에 있는 문장 10개 중에 랜덤으로 가져오지만, 소수점이 아닌 정수로 변환을 하여, 내온다

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;