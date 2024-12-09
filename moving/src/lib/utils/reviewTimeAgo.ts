export const reviewTimeAgo = (data: string) => {
  const givenDate = new Date(data);
  const currentDate = new Date();

  let yearsDifference = currentDate.getFullYear() - givenDate.getFullYear();
  let monthsDifference = currentDate.getMonth() - givenDate.getMonth();

  if (monthsDifference < 0) {
    yearsDifference -= 1;
    monthsDifference += 12;
  }

  // 조건에 따라 포맷팅
  if (yearsDifference === 0) {
    return `${monthsDifference}개월 전`; // 년도가 없으면 월만 표시
  } else if (monthsDifference === 0) {
    return `${yearsDifference}년 전`; // 월 차이가 없으면 년도만 표시
  } else {
    return `${yearsDifference}년 ${monthsDifference}개월 전`; // 둘 다 있을 경우
  }
};
