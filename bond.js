const BOND = {
	eventQue: {},
	upperContent: {},
	number: 0,
	add: function(t, e) {
		(this.eventQue[this.number] = {}),
			(this.eventQue[this.number].u = t),
			(this.eventQue[this.number]._target = e),
			this.number++;
	},
	get: function(t) {
		var e = new XMLHttpRequest();
		return e.open('GET', t, !1), e.send(null), e.responseText;
	},
	upper: function() {
		let t = Object.keys(this.eventQue),
			e = 0;
		for (e = 0; e < t.length; e++) {
			let n = this.get(this.eventQue[t[e]].u);
			'div' !== n.split('<')[1].split('>')[0].split(' ')[0]
				? (console.warn('[Templater] The requested view/template did not start with a <div> element!'),
					(this.upperContent[e] = [
						'<h2><strong>Content Load Failed: See Console!</strong></h2>',
						this.eventQue[t[e]]._target
					]),
					console.log('|' + n.split('<')[1].split('>')[0].split(' ')[0] + '|'),
					console.log('div' !== n.split('<')[1].split('>')[0].split(' ')[0]),
					console.log('nav' !== n.split('<')[1].split('>')[0].split(' ')[0]))
				: (this.upperContent[e] = [ n, this.eventQue[t[e]]._target ]);
		}
		return this.upperContent;
	},
	repl: function() {
		let t,
			e = this.upper();
		for (t = 0; t < Object.keys(e).length; t++) {
			let n,
				i = document.querySelectorAll(e[t][1]);
			for (n = 0; n < i.length; n++) i[n].innerHTML = e[t][0];
		}
	},
	created: function(t) {
		document.addEventListener('DOMContentLoaded', () => {
			try {
				t();
			} catch (t) {
				throw new Error('Parameter is not a function!');
			}
		});
	},
	truify: (t) => (1 === t ? t : ~t),
	gTitle: (t) => {
		let e = window.location.pathname.split('/'),
			n = e[e.length - 1].split(''),
			i = n[0].toUpperCase();
		(n[0] = i), (window.document.title = t + n.join(''));
	}
};
