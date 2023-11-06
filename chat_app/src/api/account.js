import axios from "axios";
const LoginURL = 'ec2-54-179-140-61.ap-southeast-1.compute.amazonaws.com'

const getUserList = async () => {
    try {        
        const apiData = await fetch('ec2-54-179-140-61.ap-southeast-1.compute.amazonaws.com');
        const jsonData = await apiData.json();
        return jsonData;
      } catch (error) {
        console.error(error);
      }
};

export default getUserList