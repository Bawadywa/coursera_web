function change_header() {
	header.className = default_header_class;
	header.classList.add(headers[INDEX]);
}

function change_nav(){
	logo.className = default_logo_class;
	logo.classList.add(hovers[INDEX]);

	for (var i = 0; i < nav_links.length; i++) {
		nav_links[i].className = default_nav_link_class;
		nav_links[i].classList.add(hovers[INDEX]);
	}
}

function change_header_btn(){
	header_btn.className = default_header_btn_class;
	header_btn.classList.add(header_btns[INDEX]);
}

function change_name_title(){
	name_title.className = default_name_title_class;
	name_title.classList.add(colors[INDEX]);
}

function change_skills(){
	for (var i = 0; i < skill_titles.length; i++) {
		skill_titles[i].className = default_skill_title_class;
		skill_titles[i].classList.add(colors[INDEX]);
	}
	for (var i = 0; i < skill_icons.length; i++) {
		skill_icons[i].className = default_icon_classes[i];
		skill_icons[i].classList.add(icons[INDEX][i]);
	}
}

function change_gallery(){
	for (var i = 0; i < gallery_imgs.length; i++) {
		gallery_imgs[i].className = default_img_class;
		gallery_imgs[i].classList.add(imgs[INDEX][i]);

		gallery_infos[i].className = default_img_info_class;
		gallery_infos[i].classList.add(styles[INDEX]);

		gallery_img_btns[i].className = default_img_btn_class;
		gallery_img_btns[i].classList.add(styles[INDEX]);
	}

	gallery_button.className = default_gallery_btn_class;
	gallery_button.classList.add(bgs[INDEX]);
	gallery_button.classList.add(btn_hovers[INDEX]);
}

function change_contact(){
	contact_title.className = default_contact_title_class;
	contact_title.classList.add(colors[INDEX]);

	for (var i = 0; i < inputs.length; i++) {
		inputs[i].className = default_inputs_classes[i];
		inputs[i].classList.add(focuses[INDEX]);
	}
}

function change_footer(){
	footer.className = default_footer_class;
	footer.classList.add(bgs[INDEX]);

	for (var i = 0; i < social_items.length; i++) {
		social_items[i].className = default_social_item_class;
		social_items[i].classList.add(styles[INDEX]);

		social_icons[i].className = default_social_icon_class;
		social_icons[i].classList.add(socials[INDEX][i]);
	}
}