import $ from 'jquery';
import 'select2';

const initselect2 = () => {
  console.log("I'm in SELECT 2")
 $('.select2').select2();
};

export { initselect2 };
