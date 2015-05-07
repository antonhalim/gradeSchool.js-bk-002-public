'use strict';

function School(){
  this.list = {}
};

School.prototype.roster = function (){
  return this.list
};

School.prototype.add = function(name, grade){
  this.list[grade] = this.list[grade] || [];
  this.list[grade].push(name);
  this.list[grade].sort();
};

School.prototype.grade = function(grade){
  if(this.list[grade] === undefined){this.list[grade] = []};
  return this.list[grade]
};
