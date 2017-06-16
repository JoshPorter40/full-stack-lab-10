function doubleDigit(value) {
	if (value.length === 1) {
		value = ('0' + value);
	}
}

var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			var unixTimeStampInSeconds = (new Date().getTime() / 1000);
			return Math.floor(unixTimeStampInSeconds).toString();
		},
		UnixMillisecond: function(){
			return new Date().getTime().toString();
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
				  return new Date().toLocaleTimeString();
			  },
	   	    WithOutSeconds: function() {
				   var d = new Date();
				   var hours = d.getHours();
				   var ampm = ' PM';
				   if (hours < 12) {
					   ampm = ' AM';
					}
				   hours % 12;
				   if (hours === 0) {
					   hours = 12;
				   }
				   var minutes = d.getMinutes();
				   return ((hours-12) + ':' + minutes + ampm);
			   }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
				var d = new Date();
				var month = d.getMonth() + 1;
				var day = d.getDate();
				var year = d.getFullYear();
				return month + '/' + day + '/' + year;
			},
			Name: function(){
				var d = new Date();
				var monthName = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
				var month = d.getMonth();
				var day = d.getDate();
				var year = d.getFullYear();
				return (monthName[month] + ' ' + day + ', ' + year);
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				var d = new Date();
				return(d.getSeconds());
			},
			DblDigit: function(){
				return doubleDigit(this.Second());
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				var d = new Date();
				return (d.getMinutes());
			},
			DblDigit: function(){
				return doubleDigit(this.Minute());
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				var d = new Date();
				return (d.getHours());
			},
			TwelveHour: function() {
				var d = new Date();
				if (d.getHours() >= 11) {
					return (d.getHours() - 12);
				} else {
					return (d.getHours());
				}
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						var d = new Date();
						if (d.getHours() >= 11) {
							return ('PM');
						} else {
							return('AM');
						}
					},
					LowerCase: function(){
						var d = new Date();
						if (d.getHours() >= 11) {
							return ('pm');
						} else {
							return('am');
						}
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				var d = new Date();
				var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];
				return (day[d.getDay()]);
			},
			AbrDayOfWeek: function(){
				var d = new Date();
				var abr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
				return (abr[d.getDay()]);
			},
			FirstTwoOfWeek: function(){
				var d = new Date();
				var twoLet = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
				return (twoLet[d.getDay()]);
			},
			WeekOfYear: function(){
				// I must have the day of the year and divide by 52 Math.floor
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						var d = new Date ();
						return String(d.getDate());
					},
					Ordinal: function(){
						var d = new Date();
						return String(d.getDate() + 'th');
					},
					DateDblDigit: function(){
						var d = new Date();
						if (d.getDate() < 10) {
						return String('0' + d.getDate())
						} else {
							return String (d.getDate())
						}
					}
				}
			})(),
			MonthNumber: function(){
				var d = new Date ();
				return String(d.getMonth() + 1);
			},
			MonthNumberDblDigit: function(){
				var d = new Date();
				if (d.getMonth() < 9) {
					return String('0' + (d.getMonth() + 1))
				} else {
					return String(d.getMonth() + 1)
				}
			},
			AbrOfCurrentMonth: function(){
				var abr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				var d = new Date();
				return String(abr[d.getMonth()]);
			},
			CurrentMonth: function(){
				var month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
				var d = new Date();
				return String(month[d.getMonth()]);
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
					},
					Ordinal: function(){
						var suffix;
						if (value > 9 && value < 21) {
							suffix = 'th';
						} else {
							var digit = value % 10;
							if (digit === 1) {
								suffic = 'st';
							} else if(digit === 2) {
								suffix = 'nd';
							} else if (digit === 3) {
								suffix = 'rd';
							} else {
								suffix = 'th';
							}
						}
					}
				}
			})(),
			YearFull: function(){
				return new Date().getFullYear().toString();
			},
			YearAbr: function(){
				var year = this.YearFull();
				return year.substr(-2);
			}
		}
	})(),
	Defaults: function(){
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var day = d.getDay();
	}
  }
})();