import React from "react";

class ArticlesPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <blockquote className="embedly-card"><h4><a
				href="https://medium.com/comet-ml/detect-eslint-malicious-packages-infection-8a9110080a24">Detect ESLint Malicious
				Packages Infection - Comet.ml - Medium</a></h4><p>To check if any of your file were possibly infected, simply run
				the following command on linux: cd / && sudo find . -name 'package.json' -exec grep -i -s -r -e
				"eslint-scope@3.7.2" -e "eslint-config-eslint@5.0.2" basename {} \; && echo "Finish scanning your computer" The
				script requires root permissions and it might take minutes or up to an hour to scan your entire file system.</p>
			</blockquote>
	}
}