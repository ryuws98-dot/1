/**
 * Vintage Film Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "유우상",
    nameEn: "유우상",
    father: "유한신",
    mother: "임미정",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "서희원",
    nameEn: "서희원",
    father: "서갑호",
    mother: "한재화",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-10",
    time: "13:00",
    venue: "청주S가든",
    hall: "웨딩홀 2층",
    address: "충북 청주시 서원구 1순환로 854",
    tel: "043-292-8525",
    mapLinks: {
      kakao: "https://kko.to/ioLrZPhn6N",
      naver: "https://map.naver.com/p/entry/place/1558655932?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.4672725&lat=36.6204802&c=15.00,0,0,0,dh"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "9회 말 역전승보다 짜릿한 운명을 만났습니다.\n이제 저희 두 사람.\n\n인생이라는 경기장에서\n같은 팀으로 선발 출전합니다"
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "유우상", bank: "농협은행", number: "302-0122-1446-71" },
      { role: "아버지", name: "유한신", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "임미정", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "서희원", bank: "우리은행", number: "100-276-2688003" },
      { role: "아버지", name: "서갑호", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "한재화", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "유우상 ♥ 서희원 결혼합니다",
    description: "2026년 10월 10일, 소중한 분들을 초대합니다."
  }
};
