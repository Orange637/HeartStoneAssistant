var html = [
	'<div id="nav-client-header" class="nav-client hide-for-small-down">',
	'<div id="nav-client-bar">',
	'<div class="grid-container nav-header-content">',
	'<ul class="nav-list nav-left" id="nav-client-main-menu">',
	'<li><a id="nav-client-home" class="nav-item nav-home" href="http://www.battlenet.com.cn/zh/" target="_blank"></a></li>',
	'<li>',
	'<div class="dropdown games">',
	'<a class="dropdown-toggle nav-link active" data-toggle="dropdown">游戏<b class="caret"></b></a>',
	'<div class="dropdown-menu">',
	'<ul class="nav-product-card-container games-menu" role="menu">',
	'<li><a class="nav-item game-icon" href="http://www.battlenet.com.cn/wow/" target="_blank"><i class="nav-icon-wow"></i>《魔兽世界®》</a></li>',
	'<li><a class="nav-item game-icon" href="http://www.diablo3.com.cn/" target="_blank"><i class="nav-icon-d3"></i>《暗黑破坏神®III》</a></li>',
	'<li><a class="nav-item game-icon" href="http://www.starcraft2.com.cn/" target="_blank"><i class="nav-icon-sc2"></i>《星际争霸®II》</a></li>',
	'<li><a class="nav-item game-icon" href="http://www.hearthstone.com.cn/" target="_blank"><i class="nav-icon-hearthstone"></i>《炉石传说®》</a></li>',
	'<li><a class="nav-item game-icon" href="http://www.heroesofthestorm.com.cn/" target="_blank"><i class="nav-icon-heroes"></i>《风暴英雄™》</a></li>',
	'<li><a class="nav-item game-icon" href="http://www.playoverwatch.cn/" target="_blank"><i class="nav-icon-overwatch"></i>《守望先锋™》</a></li>',
	'</ul>',
	'</div>',
	'</div>',
	'</li>',
	'<li><a id="nav-client-shop" class="nav-item nav-link" href="http://www.battlenet.com.cn/shop" target="_blank">商城</a></li>',
	'</ul>',
	'<ul class="nav-list nav-right" id="nav-client-account-menu">',
	'<li>',
	'<div id="username">',
	'<div class="dropdown pull-right">',
	'<a class="nav-link username username--loggedout dropdown-toggle" data-toggle="dropdown">您的通行证<b class="caret"></b></a>',
	'<div class="dropdown-menu">',
	'<div class="arrow top"></div>',
	'<div class="user-profile">',
	'<div class="dropdown-section">',
	'<div class="nav-box">',
	'<a class="nav-item nav-btn nav-btn-block nav-login-btn" href="#">登录</a>',
	'</div>',
	'</div>',
	'<div class="dropdown-section">',
	'<div class="nav-box selectable">',
	'<div class="label">',
	'<span class="battletag"></span>',
	'<span class="code"></span>',
	'</div>',
	'</div>',
	'</div>',
	'<div class="dropdown-section">',
	'<ul class="nav-list">',
	'<li>',
	'<a class="nav-item nav-a nav-item-box" href="http://www.battlenet.com.cn/account/management/" target="_blank"><i class="nav-icon-24-blue nav-icon-character-cog"></i>账户</a>',
	'</li>',
	'</ul>',
	'</div>',
	'<div class="dropdown-section">',
	'<a class="nav-item nav-item-box nav-logout" href="#"><i class="nav-icon-24-blue nav-icon-logout"></i>注销</a>',
	'</div>',
	'</div>',
	'</div>',
	'</div>',
	'</div>',
	'</li>',
	'<li><a id="nav-client-support-link" class="nav-item nav-link" href="http://www.battlenet.com.cn/support/" target="_blank"> 支持 </a></li>',
	'</ul>',
	'</div>',
	'</div>',
	'</div>'
].join("");

(function() {
	$("body").prepend(html);
	var project=Common.project;
	$(".nav-client").addClass(project);
	Login.setLogin(project);
	var dropSection = $(".dropdown-section");
	if (Login.params.isLogin) {
		if(Login.params.tag_name) {
			dropSection.eq(0).addClass("hidden");
			$(".battletag").html(Login.params.tag_name);
			$(".code").html(Login.params.battle_code);
			$(".nav-logout").attr("href", Login.params.logout_url);
			$(".username").html(Login.params.tag_name + '<b class="caret"></b>');
		}else{
			dropSection.eq(0).addClass("hidden");
			dropSection.eq(1).addClass("hidden");
			$(".username").html('您的通行证<b class="caret"></b>');
			$(".nav-logout").attr("href", Login.params.logout_url);
		}
		
	} else {
		$(".nav-login-btn").attr("href", Login.params.login_url);
		$(".username").html('您的通行证<b class="caret"></b>');
		dropSection.eq(1).addClass("hidden").end().eq(3).addClass("hidden");
	}

	var toggle = "[data-toggle='dropdown']",
		Dropdown = function(element) {
			var $el = $(element).on("click.dropdown", this.toggle);
			$("html").on("click.dropdown", function() {
				$el.parent().removeClass("open");
			});
		};

	function clearMenus() {
		$(toggle).each(function() {
			$(this).parent().removeClass("open");
		});
	}

	Dropdown.prototype = {
		constructor: Dropdown,
		toggle: function() {
			var $this = $(this),
				$parent,
				isActive;

			$parent = ($this).parent();

			isActive = $parent.hasClass("open");

			clearMenus();

			if (!isActive) {
				$parent.toggleClass("open");
			}

			$this.focus();

			$parent.trigger("toggle.dropdown", [!isActive]);

			return false;
		}

	};

	$.fn.dropdown = function(option) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data("dropdown");
			if (!data) {
				$this.data("dropdown", (data = new Dropdown(this)));
			}
			if (typeof option === "string") {
				data[option].call($this);
			}
		});
	};

	$.fn.dropdown.Constructor = Dropdown;

	$(document).on("click", clearMenus).on("click", ".dropdown-menu", function(e) {
		e.stopPropagation();
	}).on("click", toggle, Dropdown.prototype.toggle);
}());