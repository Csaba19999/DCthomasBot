"use strict";

const user = require.main.require("./src/user");

const discordEmbed = {};
let app;

discordEmbed.init = async function (params) {
	app = params.app;
};

discordEmbed.getWidgets = async function (widgets) {
	const discordWidget = {
		name: "Discord Chat",
		widget: "discord-chat",
		description: "Discord chat embed powered by TitanEmbeds",
		content: await app.renderAsync("admin/discordWidget", {}),
	};
	widgets.push(discordWidget);
	return widgets;
};
discordEmbed.renderDiscordWidget = async function (widget) {
	const data = widget.data;
	data.css = data.css !== "" ? parseInt(data.css, 10) : 0;
	data.fixedsidenav =
		data.fixedsidenav && data.fixedsidenav !== "" ? "true" : "false";
	data.noscroll = data.noscroll && data.noscroll !== "" ? "true" : "false";
	data.lockscrollbar =
		data.lockscrollbar && data.lockscrollbar !== "" ? "true" : "false";
	data.userscalable =
		data.userscalable && data.userscalable !== "" ? "true" : "false";
	if (data.serverId.slice(0, 4) === "http") {
		data.serverId = data.serverId
			.slice(data.serverId.slice(0, -1).lastIndexOf("/"))
			.replaceAll("/", "");
	}
	[data.username] = await user.getUsernamesByUids([widget.uid]);
	widget.html = await app.renderAsync("widgets/discordChat", data);
	return widget;
};

module.exports = discordEmbed;
