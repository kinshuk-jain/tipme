/* eslint-disable no-mixed-operators */

const DEFAULT_HIT_SLOP = 25;

export function populateDotsCoordinate(dotsDimension, containerWidth, containerHeight) {
  const mappedIndex = [];
  const screenCoordinates = [];

  for (let rowIndex = 0; rowIndex < dotsDimension; rowIndex++) {
    for (let columnIndex = 0; columnIndex < dotsDimension; columnIndex++) {
      const offsetX = (containerWidth / dotsDimension) * columnIndex;
      const offsetY = (containerHeight / dotsDimension) * rowIndex;

      screenCoordinates.push({
        x: offsetX + containerWidth / dotsDimension / 2,
        y: offsetY + containerWidth / dotsDimension / 2,
      });
      mappedIndex.push({ x: columnIndex, y: rowIndex });
    }
  }

  return {
    mappedIndex,
    screenCoordinates,
  };
}

export function getIntermediateDotIndexes(anchorCoordinate, focusCoordinate, dimension) {
  const intermediateDotIndexes = [];

  // check horizontal
  if (focusCoordinate.y === anchorCoordinate.y) {
    const row = focusCoordinate.y;
    for (
      let col = Math.min(focusCoordinate.x, anchorCoordinate.x) + 1;
      col < Math.max(focusCoordinate.x, anchorCoordinate.x);
      col++
    ) {
      const index = row * dimension + col;
      intermediateDotIndexes.push(index);
    }
  }

  // check vertical
  if (focusCoordinate.x === anchorCoordinate.x) {
    const col = anchorCoordinate.x;
    for (
      let row = Math.min(focusCoordinate.y, anchorCoordinate.y) + 1;
      row < Math.max(focusCoordinate.y, anchorCoordinate.y);
      row++
    ) {
      const index = row * dimension + col;
      intermediateDotIndexes.push(index);
    }
  }

  // check diagonal
  const dx = focusCoordinate.x - anchorCoordinate.x;
  const dy = focusCoordinate.y - anchorCoordinate.y;
  if (Math.abs(dx) === Math.abs(dy)) {
    let loopCount = 1;

    const getCalculatedCol = (iterator) => {
      if (dx === dy) {
        // diagonal from top left to bottom right or vice versa
        const col = Math.min(focusCoordinate.x, anchorCoordinate.x);
        return col + iterator;
      }
      // diagonal from top right to bottom left or vice versa
      const col = Math.max(focusCoordinate.x, anchorCoordinate.x);
      return col - iterator;
    };

    for (
      let row = Math.min(focusCoordinate.y, anchorCoordinate.y) + 1;
      row < Math.max(focusCoordinate.y, anchorCoordinate.y);
      row++
    ) {
      const index = row * dimension + getCalculatedCol(loopCount);
      intermediateDotIndexes.push(index);
      loopCount++;
    }
  }

  return intermediateDotIndexes;
}

export function getDotIndex(gestureCoordinate, dots, hitSlop = DEFAULT_HIT_SLOP) {
  let dotIndex;
  const { x, y } = gestureCoordinate;
  for (let i = 0; i < dots.length; i++) {
    const { x: dotX, y: dotY } = dots[i];
    if (
      dotX + hitSlop >= x &&
      dotX - hitSlop <= x &&
      (dotY + hitSlop >= y && dotY - hitSlop <= y)
    ) {
      dotIndex = i;
      break;
    }
  }
  return dotIndex;
}
