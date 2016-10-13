// Initialize collapse button
$(".button-collapse").sideNav({closeOnClick: true});
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
// $('.collapsible').collapsible();

$(document).ready(function(){
	$('.parallax').parallax();
});

var topList = ["GameAI", "MadBasic", "OpenGL-Cpp-Game"];

function getAllRepos () {
	$.getJSON('https://api.github.com/users/luisjuansp/repos?type=all&sort=pushed', function (json) {
		json.forEach(function (data) {
			console.log(data);
		})
	});
}

function filterTop (data) {
	return topList.indexOf(data.name) >= 0;
}

function filterRecent (data) {
	return topList.indexOf(data.name) < 0;
}

function openTab (page) {
	var win = window.open(page, '_blank');
	if (win) {
    	//Browser has allowed it to be opened
    	win.focus();
    } else {
    	//Browser has blocked it
    	alert('Please allow popups for this website');
    }
}

function showTop (repos) {
	$('.top').each(function (index) {
		this.className += " repo-card";
		this.innerHTML = '<div onclick="openTab(\'' + repos[index].html_url + '\');">' +
		'<p class="center-align card-title">' + repos[index].name + '</p>' +
		'<table>' +
		'<tr>' +
		'<td class="center"><i class="material-icons tiny">visibility</i>' + repos[index].watchers + '</td>' +
		'<td class="center"><i class="material-icons tiny">star</i>' + repos[index].stargazers_count + '</td>' +
		'<td class="center"><i class="material-icons tiny">call_split</i>' + repos[index].forks_count + '</td>' +
		'</tr>' +
		'</table>' +
		'<p class="center-align">' + repos[index].description + '</p></a>';
	});
}

$.getJSON('https://api.github.com/users/luisjuansp/repos?type=all&sort=pushed', function (json) {
	showTop(json.filter(filterTop));
});

function showRecent (repos) {
	$('.recent').each(function (index) {
		this.className += " repo-card";
		this.innerHTML = '<div onclick="openTab(\'' + repos[index].html_url + '\');">' +
		'<p class="center-align card-title">' + repos[index].name + '</p>' +
		'<table>' +
		'<tr>' +
		'<td class="center"><i class="material-icons tiny">visibility</i>' + repos[index].watchers + '</td>' +
		'<td class="center"><i class="material-icons tiny">star</i>' + repos[index].stargazers_count + '</td>' +
		'<td class="center"><i class="material-icons tiny">call_split</i>' + repos[index].forks_count + '</td>' +
		'</tr>' +
		'</table>' +
		'<p class="center-align">' + repos[index].description + '</p></a>';
	});
}

$.getJSON('https://api.github.com/users/luisjuansp/repos?type=all&sort=pushed', function (json) {
	showRecent(json.filter(filterRecent));
});