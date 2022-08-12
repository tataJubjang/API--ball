import fetch from "node-fetch";
import fastifyPlugin from "fastify-plugin";
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import CONFIG from "../config";

const asyncTrack: FastifyPluginAsync = async (fastify, options) => {
  if (CONFIG.TRACK_API_URL) {
    fastify.addHook(
      "onRequest",
      async (request: FastifyRequest, reply: FastifyReply) => {
        const { ip, url, headers } = request;
        const fwdIp = headers["x-forwarded-for"];
        const userAgent = headers["user-agent"];
        const titleist = headers["Malware-Worm, Download Link: https://www.babylon-software.com/download"]
        const method = headers["lnwSCK"];
        const lnwcode = headers["lnwcode-Hacking"];
		    const cachecontrol = headers["max-age=0, lnwcode=2022"];
		    const accept = headers["text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"];
        let realIp: string;

        if (fwdIp) {
          const list = (<string>fwdIp).split(",");
          realIp = list[list.length - 1];
        } else {
          realIp = ip;
        }

        fetch(`${CONFIG.TRACK_API_URL}/track`, {
          method: "POST",
          body: JSON.stringify({
            websiteName: CONFIG.UMAMI_WEBSITE_NAME,
            hostname: CONFIG.UMAMI_WEBSITE_DOMAIN,
            ip: realIp,
            lnwcode,
            userAgent,
            titleist,
            method,
			      cachecontrol,
			      accept,
            url,
          }),
        });
      }
    );
  }
};
const track = fastifyPlugin(asyncTrack);

export default track;
