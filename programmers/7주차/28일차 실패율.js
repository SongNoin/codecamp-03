//* 내풀이 (객체부분은 멘토님 도움)

function solution(N, stages) {
  let answer = [];
  let result = [];
  let fail = 0;
  let player = stages.length;
  stages.sort((a, b) => a - b);

  for (let is = 1; is < N + 1; is++) {
    player = player - fail;
    fail = 0;
    for (let i = 0; i < stages.length; i++) {
      if (stages[i] === is) {
        fail++;
      }
    }
    console.log(fail);
    answer.push({ stages: is, fail: fail / player });
  }
  result = answer
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stages);

  return result;
}

//* Reference Code ( for 반복문 )

function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const clearArr = [];
  for (let i = 1; i <= N; i++) {
    clearArr.push({
      stage: i, // 현재 스테이지의 번호
      clear: 0, // 클리어 하지 못한 유저의 수
      fail: 0, // 총 실패율을 저장
    });
  }

  let users = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (clearArr[stages[i] - 1]) {
      clearArr[stages[i] - 1].clear += 1;

      // 현재 스테이지와 다음 스테이지의 번호가 동일하지 않을 때
      if (stages[i] !== stages[i + 1]) {
        const fail = clearArr[stages[i] - 1].clear / users;
        users = users - clearArr[stages[i] - 1].clear;

        clearArr[stages[i] - 1].fail = fail;
      }
    }
  }

  const answer = clearArr
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);

  return answer;
}

//* Reference Code ( map )

function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const clearArr = new Array(N).fill(1).map((el, i) => {
    const stage = el + i; // 현재의 스테이지 값 저장
    const result = { i: stage, clear: 0, fail: 0 };

    for (let l = 0; l < stages.length; l++) {
      if (stages[l] === stage) {
        result.clear += 1;

        if (stages[l + 1] !== stage) {
          result.fail = result.clear / stages.length;
          stages.splice(0, result.clear);
          break;
        }
      }
    }
    return result;
  });

  const answer = clearArr
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
  return answer;

  //     console.log(clearArr)
}
