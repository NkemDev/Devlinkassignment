//Program to write the perimeter and area of a rectangle
function rectPerimeter(length, width) {
    return 2 * (length + width);
  }
  
  function rectArea(length, width) {
    return length * width;
  }
  
  const length = 45;
  const width = 13;
  
  const perimeter = rectPerimeter(length, width);
  const area = rectArea(length, width);
  
  console.log("Perimeter:", perimeter);
  console.log("Area:", area);
  