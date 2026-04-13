import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "未成年人保护规则",
  description: "蓝卡未成年人保护规则",
  alternates: {
    canonical: getCanonicalUrl("/minors/"),
  },
};

export default function MinorsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-8">
      <h1 className="text-2xl font-semibold text-gray-900">未成年人保护规则</h1>
      <p className="mt-2 text-sm text-gray-400">
        更新日期：2026年4月1日 · 生效日期：2026年4月1日 · 版本号：V2.0
      </p>

      <div className="mt-10 space-y-10 text-[15px] leading-7 text-gray-600">
        {/* 1. 平台定位与年龄要求 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">1. 平台定位与年龄要求</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">1.1 服务对象</h3>
          <p>
            蓝卡是一款面向高校在校学生的校园社区平台，由<strong className="text-gray-900">宁波拓扑森林科技有限公司</strong>（以下简称&ldquo;我们&rdquo;）运营。本平台的核心功能（校园墙、课程评价、二手交易、失物招领等）均围绕大学校园场景设计，<strong className="text-gray-900">主要面向年满18周岁的在校大学生</strong>。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">1.2 未成年人使用限制</h3>
          <p>
            <strong className="text-gray-900">我们不主动面向未满14周岁的儿童提供服务，也不会在明知的情况下收集未满14周岁儿童的个人信息。</strong>
          </p>
          <p className="mt-2">
            已满14周岁未满18周岁的未成年人，应在充分了解本规则及《蓝卡用户协议》《蓝卡隐私政策》后，在监护人的指导和同意下决定是否使用本平台服务。
          </p>
        </section>

        {/* 2. 法律依据 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">2. 法律依据</h2>
          <p>本规则依据以下法律法规制定：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>《中华人民共和国未成年人保护法》</li>
            <li>《中华人民共和国个人信息保护法》</li>
            <li>《儿童个人信息网络保护规定》</li>
            <li>《未成年人网络保护条例》</li>
          </ul>
        </section>

        {/* 3. 我们采取的保护措施 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">3. 我们采取的保护措施</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.1 注册环节</h3>
          <p>
            本平台通过手机号码注册登录。我们在用户协议中明确告知本平台主要面向成年在校大学生，提醒未成年人在监护人指导下使用。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.2 内容安全</h3>
          <p>
            我们对平台内所有用户发布的内容进行审核管理，过滤违法违规信息，维护健康的社区环境。具体社区行为准则详见《蓝卡社区公约》。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.3 举报机制</h3>
          <p>
            所有用户均可通过应用内举报功能，对不良内容或侵害未成年人权益的行为进行举报。我们将及时处理相关举报，并依法采取必要措施。
          </p>
        </section>

        {/* 4. 儿童个人信息保护 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">4. 儿童个人信息保护</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.1 不主动收集</h3>
          <p>
            我们不会主动收集未满14周岁儿童的个人信息。注册过程中不要求用户提供年龄或出生日期，但我们的服务内容和场景设计（校园社区）面向成年大学生群体。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.2 发现后的处理</h3>
          <p>如果我们通过任何途径发现，或经监护人告知，某一账号的实际使用者为未满14周岁的儿童，我们将：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>立即停止对该儿童个人信息的收集和使用；</li>
            <li>对已收集的该儿童个人信息进行删除处理；</li>
            <li>如有必要，冻结或注销相关账号。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.3 监护人的权利</h3>
          <p>如您是未满14周岁儿童的监护人，发现您的被监护人注册了蓝卡账号或向我们提供了个人信息，您有权：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>要求我们删除该儿童的全部个人信息；</li>
            <li>要求我们注销该儿童的账号；</li>
            <li>要求我们提供已收集的该儿童个人信息的副本。</li>
          </ul>
          <p className="mt-2">
            请通过本规则第6条的方式联系我们，我们将在<strong className="text-gray-900">15个工作日内</strong>响应并处理您的请求。
          </p>
        </section>

        {/* 5. 对14至18周岁未成年人的提醒 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">5. 对14至18周岁未成年人的提醒</h2>
          <p>如您是已满14周岁未满18周岁的未成年人：</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>请在您的监护人指导下阅读并理解本规则、《蓝卡用户协议》和《蓝卡隐私政策》；</li>
            <li>使用本平台发布内容时，请注意保护个人隐私，不要公开真实姓名、家庭住址、就读学校的详细信息、联系方式等敏感个人信息；</li>
            <li>如遇到任何让您感到不适或不安全的内容或行为，请立即告知您的监护人，并通过应用内举报功能向我们反馈；</li>
            <li>请合理安排使用时间，避免沉迷网络。</li>
          </ul>
        </section>

        {/* 6. 联系我们 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">6. 联系我们</h2>
          <p>如您对本规则有任何疑问，或需要就未成年人保护事宜联系我们，请通过以下方式：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-gray-900">联系邮箱：</strong>support@topoforest.com</li>
            <li><strong className="text-gray-900">应用内反馈：</strong>我的 → 设置 → 帮助与反馈</li>
          </ul>
          <p className="mt-3">
            我们将在收到请求后<strong className="text-gray-900">15个工作日内</strong>予以回复和处理。
          </p>
          <p className="mt-3">
            <strong className="text-gray-900">投诉渠道：</strong>如您认为我们未能充分保护未成年人权益，可向<strong className="text-gray-900">国家互联网信息办公室违法和不良信息举报中心</strong>（12377.cn）、<strong className="text-gray-900">浙江省通信管理局</strong>或<strong className="text-gray-900">宁波市网信部门</strong>进行投诉举报。
          </p>
        </section>

        {/* 7. 规则更新 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">7. 规则更新</h2>
          <p>
            我们可能会根据法律法规变化或业务调整修订本规则。修订后的规则将在应用内公布并说明生效日期。如涉及未成年人权益的重大变更，我们将通过应用内弹窗方式进行提示。
          </p>
        </section>

        {/* 底部签名 */}
        <div className="border-t border-border-primary pt-6 text-center text-sm text-gray-400">
          <p className="font-medium text-gray-600">宁波拓扑森林科技有限公司</p>
          <p className="mt-1">本规则版本：V2.0 | 生效日期：2026年4月1日</p>
        </div>
      </div>
    </div>
    </div>
  );
}
