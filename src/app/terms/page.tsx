import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "用户协议",
  description: "蓝卡用户协议",
  alternates: {
    canonical: getCanonicalUrl("/terms/"),
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-8">
      <h1 className="text-2xl font-semibold text-gray-900">蓝卡用户协议</h1>
      <p className="mt-2 text-sm text-gray-400">
        更新日期：2026年4月1日 · 生效日期：2026年4月1日 · 版本号：V2.0
      </p>

      <div className="mt-10 space-y-10 text-[15px] leading-7 text-gray-600">
        {/* 1. 协议的范围与确认 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">1. 协议的范围与确认</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">1.1 协议主体</h3>
          <p>
            本《用户协议》（以下简称&ldquo;本协议&rdquo;）由您（以下简称&ldquo;用户&rdquo;或&ldquo;您&rdquo;）与<strong className="text-gray-900">宁波拓扑森林科技有限公司</strong>（以下简称&ldquo;拓扑森林&rdquo;、&ldquo;我们&rdquo;或&ldquo;公司&rdquo;）共同缔结。本协议对您使用&ldquo;蓝卡&rdquo;软件及相关服务（以下简称&ldquo;本平台&rdquo;或&ldquo;蓝卡&rdquo;）具有法律约束力。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">1.2 协议接受</h3>
          <p>
            您通过网络页面点击确认、实际使用本平台服务或以其他方式明示或默示接受本协议，即视为您已阅读、理解并同意接受本协议的全部条款。如您不同意本协议的任何内容，请立即停止注册或使用本平台服务。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">1.3 协议更新</h3>
          <p>
            我们保留根据法律法规变化及业务发展需要不时修订本协议的权利。修订后的协议将在本平台显著位置公布，您继续使用本平台服务视为接受修订后的协议。如涉及您重大权益的变更，我们将通过应用内弹窗方式征求您的明示同意。
          </p>
        </section>

        {/* 2. 账号注册与管理 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">2. 账号注册与管理</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">2.1 注册资格</h3>
          <p>
            您确认在您开始注册程序使用本平台服务前，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力。若您不具备前述与您行为相适应的民事行为能力，则您及您的监护人应依照法律规定承担因此而导致的一切后果。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">2.2 注册信息</h3>
          <p>
            您应当按本平台要求提供真实、准确、完整、合法有效的注册信息（包括手机号码等），并及时更新以保持信息的有效性。因您提供的注册信息不真实、不准确或不完整而导致的任何损失或责任由您自行承担。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">2.3 账号安全</h3>
          <p>
            您的账号由您自行保管，您应当对以该账号进行的所有活动和事件负法律责任。您应妥善保管账号信息，不得将账号转让、出借、共享或以任何方式允许第三方使用。如发现账号遭未经授权使用，应立即通知我们。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">2.4 学历认证</h3>
          <p>
            为提升社区可信度，本平台提供学历认证功能。当您选择进行认证时，本平台将通过内嵌浏览器引导您登录学信网，并在您的设备本地提取学历信息。学历认证为自愿行为，不影响基本功能使用。
          </p>
        </section>

        {/* 3. 服务内容 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">3. 服务内容</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.1 服务描述</h3>
          <p>蓝卡是一款面向高校学生的校园社区平台，为用户提供包括但不限于以下服务（以下统称&ldquo;本服务&rdquo;）：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-gray-900">社区互动：</strong>校园墙、发现页等内容浏览与发布；</li>
            <li><strong className="text-gray-900">即时通讯：</strong>用户间的文字、图片私聊；</li>
            <li><strong className="text-gray-900">信息服务：</strong>二手交易、失物招领、课程评价、排行榜等；</li>
            <li><strong className="text-gray-900">个人主页：</strong>个人资料展示与管理。</li>
          </ul>
          <p className="mt-2">具体服务内容以本平台实际提供的为准。</p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.2 服务变更</h3>
          <p>
            我们保留随时变更、中断或终止部分或全部服务的权利。如发生服务变更，我们将尽可能提前通知您，但紧急情况下除外。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.3 第三方服务</h3>
          <p>
            本平台可能包含第三方提供的服务或链接。您理解并同意，此类服务由第三方独立提供，我们不对其内容、准确性、合法性或可用性承担任何责任。
          </p>
        </section>

        {/* 4. 用户行为规范 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">4. 用户行为规范</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.1 遵守法律</h3>
          <p>
            您在使用本平台服务时，必须遵守中华人民共和国相关法律法规，包括但不限于《网络安全法》《数据安全法》《个人信息保护法》《互联网信息服务管理办法》等。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.2 禁止行为</h3>
          <p>您不得利用本平台从事以下行为：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>发布、传播违反法律法规、危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一的内容；</li>
            <li>发布、传播损害国家荣誉和利益、煽动民族仇恨、民族歧视、破坏民族团结的内容；</li>
            <li>发布、传播邪教和封建迷信、淫秽色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的内容；</li>
            <li>侮辱或者诽谤他人，侵害他人合法权益（包括但不限于名誉权、肖像权、知识产权等）；</li>
            <li>发布、传播虚假信息、扰乱社会秩序、破坏社会稳定的内容；</li>
            <li>从事网络诈骗、洗钱、非法集资等违法金融活动；</li>
            <li>未经授权收集、存储、使用其他用户的个人信息；</li>
            <li>制作、发布、传播恶意软件、病毒或其他可能破坏、干扰本平台正常运行的程序；</li>
            <li>对本平台进行反向工程、反向汇编、反向编译或以其他方式试图发现源代码；</li>
            <li>利用本平台从事任何其他违法违规或违反公序良俗的活动。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.3 社区秩序</h3>
          <p>
            您应当尊重其他用户，文明交流，不得进行人身攻击、骚扰、威胁或其他破坏社区和谐的行为。具体社区行为准则详见《蓝卡社区公约》。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.4 二手交易规范</h3>
          <p>
            使用本平台二手交易功能时，您应确保所发布商品信息的真实性、合法性。交易行为系用户双方的自主行为，我们仅提供信息展示平台，不对交易的达成、商品质量或交易纠纷承担担保或连带责任。
          </p>
        </section>

        {/* 5. 内容发布与知识产权 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">5. 内容发布与知识产权</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">5.1 内容定义</h3>
          <p>
            &ldquo;内容&rdquo;指您在使用本平台服务过程中制作、上传、发布、传播的任何信息，包括但不限于文字、图片、评论等。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">5.2 内容权利归属</h3>
          <p>您发布的内容的知识产权归您或相关权利人所有。您保留对您上传内容的著作权及其他相关权利。</p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">5.3 内容授权</h3>
          <p>
            您授予我们一项全球性的、非独家的、免费的、可转授权的权利，允许我们使用、复制、修改、改编、发布、翻译、创建衍生作品、传播、表演和展示您发布的内容，以便我们向您及本平台其他用户提供服务、改进服务质量及进行合理的宣传推广。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">5.4 内容保证</h3>
          <p>
            您保证您发布的内容不侵犯任何第三方的合法权益（包括但不限于知识产权、肖像权、隐私权等）。如因您发布的内容导致任何第三方投诉、索赔或诉讼，由您独立承担全部法律责任。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">5.5 内容审核</h3>
          <p>
            我们有权根据国家法律法规、政策要求及本平台规则对您发布的内容进行审核，并有权在不事先通知的情况下删除、屏蔽或断开链接违法违规内容，对发布违规内容的账号采取包括但不限于警告、限制功能、封禁等措施。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">5.6 平台知识产权</h3>
          <p>
            本平台的所有内容（包括但不限于软件、技术、程序、网页、文字、图片、图表、版面设计、商标、标识等）的知识产权归我们或相关权利人所有。未经我们书面许可，任何人不得以任何方式使用、复制、修改、传播或用于商业目的。
          </p>
        </section>

        {/* 6. 隐私保护 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">6. 隐私保护</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">6.1 隐私政策</h3>
          <p>
            我们非常重视您的个人信息保护，具体详见《蓝卡隐私政策》。您同意我们按照《蓝卡隐私政策》收集、使用、存储和分享您的个人信息。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">6.2 数据安全</h3>
          <p>
            我们将采取合理的技术和管理措施保护您的个人信息安全，但互联网环境并非百分之百安全，我们无法保证您的个人信息绝对安全。
          </p>
        </section>

        {/* 7. 免责声明与责任限制 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">7. 免责声明与责任限制</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">7.1 服务提供</h3>
          <p>
            我们尽力为您提供优质服务，但不对服务的及时性、安全性、准确性作绝对担保。您理解并同意，本服务是按&ldquo;现状&rdquo;和&ldquo;现有&rdquo;基础提供的。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">7.2 用户风险</h3>
          <p>
            您理解并同意，您通过本平台与其他用户的互动及交易行为纯属个人行为，我们不对因此产生的任何损失承担责任。您应自行判断其他用户发布内容的真实性、合法性及有效性，并自行承担相关风险。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">7.3 外部链接</h3>
          <p>
            对于本平台链接到的第三方网站或资源，我们不对其内容、准确性、可用性负责，也不对其提供的任何产品或服务承担任何责任。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">7.4 责任限制</h3>
          <p>
            在法律允许的最大范围内，我们对因不可抗力、系统故障、网络攻击、第三方原因或您的过错导致的任何直接、间接、附带、特殊或后果性损害不承担责任。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">7.5 赔偿上限</h3>
          <p>
            除法律法规另有强制性规定外，我们就本协议项下向您承担的赔偿责任（如有）总额不超过您在过去十二个月内向我们支付的服务费用总额（如有），或人民币壹佰元（以较高者为准）。
          </p>
        </section>

        {/* 8. 违约责任 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">8. 违约责任</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">8.1 违约处理</h3>
          <p>如您违反本协议的任何条款，我们有权独立判断并视情节轻重采取以下一项或多项措施：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>要求您限期改正；</li>
            <li>删除、屏蔽或断开相关内容的链接；</li>
            <li>限制或暂停您的部分或全部账号功能；</li>
            <li>永久封禁您的账号；</li>
            <li>将您的违规行为向有关部门报告；</li>
            <li>追究您的法律责任，要求您赔偿我们因此遭受的损失（包括但不限于直接损失、间接损失、律师费、诉讼费等）。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">8.2 损害计算</h3>
          <p>
            您理解并同意，因您的违规行为给我们造成的损害难以准确计算，我们有权根据具体情况要求您支付合理的违约金。
          </p>
        </section>

        {/* 9. 服务的变更、中断与终止 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">9. 服务的变更、中断与终止</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">9.1 服务变更</h3>
          <p>
            我们保留随时修改或中断服务而不需通知您的权利。我们行使修改或中断服务的权利，无需对您或任何第三方承担任何责任。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">9.2 账号注销</h3>
          <p>
            您有权随时停止使用本平台服务并申请注销账号。您可通过&ldquo;我的 → 设置 → 账号安全 → 注销账号&rdquo;提交注销申请。账号注销后，我们将根据法律法规要求及《蓝卡隐私政策》处理您的个人信息。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">9.3 协议终止</h3>
          <p>发生以下情形时，我们有权终止本协议并关闭您的账号：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>您违反本协议的任何条款；</li>
            <li>您提供的注册信息不真实、不准确或不完整；</li>
            <li>您长期未使用本平台服务；</li>
            <li>根据法律法规或主管部门要求；</li>
            <li>因不可抗力或其他我们无法控制的原因导致无法提供服务。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">9.4 终止后的处理</h3>
          <p>
            本协议终止后，您将无法继续使用本平台服务。我们有权继续保留或删除您在使用本平台期间发布的相关内容，法律法规另有规定的除外。
          </p>
        </section>

        {/* 10. 争议解决 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">10. 争议解决</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">10.1 适用法律</h3>
          <p>
            本协议的订立、执行和解释及争议的解决均适用中华人民共和国法律（为本协议之目的，不包括香港特别行政区、澳门特别行政区和台湾地区法律）。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">10.2 争议协商</h3>
          <p>因本协议引起的或与本协议有关的任何争议，双方应首先通过友好协商解决。</p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">10.3 诉讼管辖</h3>
          <p>
            协商不成的，任何一方均可向<strong className="text-gray-900">宁波拓扑森林科技有限公司所在地（浙江省宁波市）</strong>有管辖权的人民法院提起诉讼。
          </p>
        </section>

        {/* 11. 其他条款 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">11. 其他条款</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">11.1 完整性</h3>
          <p>
            本协议及本平台公布的相关规则、政策构成双方就本协议标的达成的完整协议，并取代双方先前就同一标的达成的所有口头或书面的协议、谅解和沟通。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">11.2 可分割性</h3>
          <p>
            如果本协议中的任何条款被认定为无效、违法或不可执行，该条款应在必要的最小范围内被限制或删除，而本协议的其他条款仍应保持完全效力。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">11.3 权利不放弃</h3>
          <p>
            我们未行使或延迟行使本协议项下的任何权利不构成对该权利的放弃，单次或部分行使任何权利不妨碍进一步行使该权利或行使其他权利。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">11.4 转让</h3>
          <p>
            未经我们事先书面同意，您不得将本协议项下的任何权利或义务转让给任何第三方。我们有权在符合法律规定的情况下将本协议项下的权利义务转让给关联公司或业务承继方，无需征得您的同意，但会通知您。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">11.5 通知</h3>
          <p>
            我们可通过本平台公告、站内信、短信或您预留的其他联系方式向您发送通知。通知发送后，视为已送达。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">11.6 联系方式</h3>
          <p>如您对本协议有任何疑问、意见或建议，或需要投诉举报，可通过以下方式联系我们：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-gray-900">运营主体：</strong>宁波拓扑森林科技有限公司</li>
            <li><strong className="text-gray-900">联系邮箱：</strong>support@topoforest.com</li>
            <li><strong className="text-gray-900">应用内反馈：</strong>我的 → 设置 → 帮助与反馈</li>
          </ul>
        </section>

        {/* 底部签名 */}
        <div className="border-t border-border-primary pt-6 text-center text-sm text-gray-400">
          <p className="font-medium text-gray-600">宁波拓扑森林科技有限公司</p>
          <p className="mt-1">本协议版本：V2.0 | 生效日期：2026年4月1日</p>
        </div>
      </div>
    </div>
    </div>
  );
}
