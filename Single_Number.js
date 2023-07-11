function single (nums) {
    let c = 0;
    for(let i=0; i<nums.length;i++){
          c = c ^ nums[i]; //tabla de XOR
          console.log(c)
    }
    return c;
};

single([2,2,1])
