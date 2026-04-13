import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "蓝卡隐私政策",
  alternates: {
    canonical: getCanonicalUrl("/privacy/"),
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-8">
      <h1 className="text-2xl font-semibold text-gray-900">蓝卡隐私政策</h1>
      <p className="mt-2 text-sm text-gray-400">
        更新日期：2026年4月1日 · 生效日期：2026年4月1日 · 版本号：V2.0
      </p>

      <div className="mt-6 rounded-lg bg-surface-secondary p-4 text-[14px] leading-6 text-gray-600">
        <strong className="text-gray-900">重要提示：</strong>
        请您在使用蓝卡服务前仔细阅读本政策，特别是以<strong>粗体</strong>标识的条款。如您不同意本政策的任何内容，请停止使用并注销账号。
      </div>

      <div className="mt-10 space-y-10 text-[15px] leading-7 text-gray-600">
        {/* 1. 引言 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">1. 引言</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">1.1 制定依据</h3>
          <p>
            本隐私政策依据《中华人民共和国个人信息保护法》《中华人民共和国网络安全法》《中华人民共和国数据安全法》《App违法违规收集使用个人信息行为认定方法》等相关法律法规制定。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">1.2 适用范围</h3>
          <p>
            本政策适用于<strong className="text-gray-900">宁波拓扑森林科技有限公司</strong>（以下简称&ldquo;我们&rdquo;）通过&ldquo;蓝卡&rdquo;移动应用程序（iOS 及 Android 版本，以下简称&ldquo;本应用&rdquo;）提供服务时，对您个人信息的收集、使用、存储、共享及保护行为。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">1.3 特别提示</h3>
          <p>
            <strong className="text-gray-900">本应用为面向高校学生的校园社区平台，涉及社交内容发布、即时通讯等功能，需要处理您的部分个人信息。请您务必仔细阅读并理解本政策，特别是以粗体标识的条款。</strong>
          </p>
        </section>

        {/* 2. 定义 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">2. 定义</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-gray-900">个人信息：</strong>以电子或其他方式记录的与已识别或可识别的自然人有关的各种信息，不包括匿名化处理后的信息。</li>
            <li><strong className="text-gray-900">敏感个人信息：</strong>一旦泄露或非法使用，容易导致自然人的人格尊严受到侵害或人身、财产安全受到危害的个人信息，包括行踪轨迹、通信内容等信息，以及不满十四周岁未成年人的个人信息。</li>
          </ul>
        </section>

        {/* 3. 我们收集的个人信息 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">3. 我们收集的个人信息</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.1 账号注册与登录</h3>
          <p>为创建蓝卡账号，您需要提供：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-gray-900">必要信息：</strong>手机号码（通过阿里云号码认证服务进行本机号码一键登录或短信验证码登录）；</li>
            <li><strong className="text-gray-900">可选信息：</strong>昵称、头像、性别、生日、个性签名、学校、专业、年级。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.2 学历认证</h3>
          <p>当您使用学历认证功能时，本应用将：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>通过内嵌浏览器引导您登录学信网，获取学历信息页面；</li>
            <li>对页面进行截屏，并使用<strong className="text-gray-900">设备端文字识别技术</strong>（Google ML Kit）提取学历信息；</li>
            <li><strong className="text-gray-900">文字识别完全在您的设备本地完成，截屏图片和识别结果不会上传至任何第三方服务器。</strong></li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.3 社交内容与互动数据</h3>
          <p>作为校园社区平台，我们收集您主动产生的数据：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-gray-900">内容数据：</strong>您发布的文字、图片、位置标签；</li>
            <li><strong className="text-gray-900">互动数据：</strong>评论、点赞、收藏、关注/粉丝关系；</li>
            <li><strong className="text-gray-900">搜索记录：</strong>您的搜索关键词（同时在本地存储，便于快捷搜索）。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.4 即时通讯数据（敏感个人信息）</h3>
          <p>当您使用私聊功能时：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>您发送和接收的<strong className="text-gray-900">文字消息、图片消息将存储在我们的服务器上</strong>，以便您在不同设备上查看历史消息；</li>
            <li>您可以主动删除消息，删除后服务器将不再保留该消息内容。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.5 位置信息（敏感个人信息）</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>当您在发布内容时选择添加位置标签，我们将通过系统定位服务获取您的<strong className="text-gray-900">地理位置</strong>，并转换为可读的地址信息；</li>
            <li><strong className="text-gray-900">定位仅在您主动触发时进行，不会在后台持续采集。</strong></li>
          </ul>
          <p className="mt-2 text-sm italic text-gray-400">
            您可随时在系统设置中关闭定位权限，这不会影响除位置标签外的其他功能使用。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.6 设备与日志信息</h3>
          <p>为保障服务安全和运行质量，我们会自动收集：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-gray-900">设备信息：</strong>设备型号、操作系统版本；</li>
            <li><strong className="text-gray-900">网络信息：</strong>网络连接类型；</li>
            <li><strong className="text-gray-900">应用信息：</strong>应用版本号。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">3.7 本地存储数据</h3>
          <p>为提升使用体验，以下信息仅存储在您的设备本地：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>主题偏好（浅色/深色模式）、语言设置；</li>
            <li>搜索历史、评论草稿、表情使用记录；</li>
            <li>登录凭证（JWT Token，其中 Refresh Token 使用设备加密存储）。</li>
          </ul>
        </section>

        {/* 4. 我们如何使用您的个人信息 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">4. 我们如何使用您的个人信息</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.1 提供核心服务</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>账号注册、登录与身份验证；</li>
            <li>内容发布、浏览与社交互动；</li>
            <li>即时通讯与消息通知；</li>
            <li>二手交易、失物招领、课程评价等社区功能。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.2 内容推荐</h3>
          <p>
            我们可能基于您的浏览记录、互动行为向您推荐可能感兴趣的内容。推荐算法主要基于内容标签匹配和热门程度。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.3 安全保障</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>识别和防范异常登录行为；</li>
            <li>内容审核以过滤违法违规信息；</li>
            <li>维护平台运行安全。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">4.4 服务改进</h3>
          <p>对使用情况进行匿名统计分析，以改善服务质量和修复故障。</p>
        </section>

        {/* 5. 设备权限使用说明 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">5. 设备权限使用说明</h2>
          <p>
            本应用可能申请以下设备权限，<strong className="text-gray-900">所有权限均在您使用相关功能时才会请求授权，不会提前或强制获取</strong>：
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-primary">
                  <th className="pb-2 pr-4 font-medium text-gray-900">权限</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">使用场景</th>
                  <th className="pb-2 font-medium text-gray-900">拒绝后的影响</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-primary">
                <tr><td className="py-2 pr-4">相机</td><td className="py-2 pr-4">拍照发布内容、扫描二维码</td><td className="py-2">无法拍照或扫码，不影响其他功能</td></tr>
                <tr><td className="py-2 pr-4">相册（读取）</td><td className="py-2 pr-4">选择图片发布内容或设置头像</td><td className="py-2">无法从相册选图</td></tr>
                <tr><td className="py-2 pr-4">相册（写入）</td><td className="py-2 pr-4">保存图片到本地相册</td><td className="py-2">无法保存图片</td></tr>
                <tr><td className="py-2 pr-4">麦克风</td><td className="py-2 pr-4">录制语音消息</td><td className="py-2">无法发送语音</td></tr>
                <tr><td className="py-2 pr-4">定位</td><td className="py-2 pr-4">发布内容时添加位置标签</td><td className="py-2">无法使用位置标签功能</td></tr>
                <tr><td className="py-2 pr-4">存储（Android）</td><td className="py-2 pr-4">缓存图片和保存文件</td><td className="py-2">可能影响图片加载速度</td></tr>
                <tr><td className="py-2 pr-4">电话状态（Android）</td><td className="py-2 pr-4">阿里云一键登录需要读取 SIM 卡信息</td><td className="py-2">无法使用一键登录，可改用验证码登录</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. 第三方SDK信息共享清单 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">6. 第三方SDK信息共享清单</h2>
          <p>
            本应用集成了以下第三方 SDK，<strong className="text-gray-900">我们已对其数据处理行为进行评估</strong>：
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-primary">
                  <th className="pb-2 pr-4 font-medium text-gray-900">SDK 名称</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">提供方</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">用途</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">收集的信息</th>
                  <th className="pb-2 font-medium text-gray-900">处理方式</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-primary">
                <tr>
                  <td className="py-2 pr-4">阿里云号码认证 SDK</td>
                  <td className="py-2 pr-4">阿里云计算有限公司</td>
                  <td className="py-2 pr-4">本机号码一键登录</td>
                  <td className="py-2 pr-4">手机号码、SIM 卡信息、设备标识、网络状态</td>
                  <td className="py-2">通过运营商网关获取本机号码，数据传输至阿里云服务器验证</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Google ML Kit（文字识别）</td>
                  <td className="py-2 pr-4">Google LLC</td>
                  <td className="py-2 pr-4">学信网页面文字识别</td>
                  <td className="py-2 pr-4">无</td>
                  <td className="py-2"><strong className="text-gray-900">完全在设备本地运行，不向任何服务器传输数据</strong></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Google Fonts</td>
                  <td className="py-2 pr-4">Google LLC</td>
                  <td className="py-2 pr-4">加载显示字体</td>
                  <td className="py-2 pr-4">网络请求信息（IP 地址）</td>
                  <td className="py-2">从 fonts.googleapis.com 下载字体文件，字体缓存在本地</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            <strong className="text-gray-600">说明：</strong>本应用目前未集成任何第三方数据统计、广告追踪、推送通知或社交分享 SDK。如后续版本新增第三方 SDK，我们将更新本政策并告知您。
          </p>
        </section>

        {/* 7. 个人信息的存储 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">7. 个人信息的存储</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">7.1 存储地点</h3>
          <p>
            您的个人信息存储于<strong className="text-gray-900">中华人民共和国境内</strong>的服务器上（腾讯云）。我们不会将您的个人信息传输至境外。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">7.2 存储期限</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong className="text-gray-900">账号信息：</strong>在您使用服务期间持续保存。注销账号后，除法律法规另有要求外，我们将在<strong className="text-gray-900">15个工作日内</strong>删除或匿名化处理；</li>
            <li><strong className="text-gray-900">发布内容：</strong>您主动删除后或账号注销后<strong className="text-gray-900">30天内</strong>从服务器删除；</li>
            <li><strong className="text-gray-900">聊天消息：</strong>您主动删除的消息将立即从服务器移除。账号注销后全部聊天记录将在<strong className="text-gray-900">30天内</strong>删除；</li>
            <li><strong className="text-gray-900">日志信息：</strong>保存不超过<strong className="text-gray-900">6个月</strong>，用于安全审计；</li>
            <li><strong className="text-gray-900">备份数据：</strong>服务器备份中的数据将在正式删除后<strong className="text-gray-900">90天内</strong>自动清除。</li>
          </ul>
        </section>

        {/* 8. 个人信息安全保护 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">8. 个人信息安全保护</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">8.1 技术措施</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>客户端与服务器之间采用 HTTPS/WSS 加密传输；</li>
            <li>登录凭证中的 Refresh Token 使用设备级加密存储（Flutter Secure Storage）；</li>
            <li>用户密码在服务器端加密存储，不以明文保存。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">8.2 安全事件响应</h3>
          <p>如发生个人信息安全事件，我们将：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>立即启动应急预案，采取补救措施；</li>
            <li>按照法律法规要求向监管机构报告；</li>
            <li>通过应用内通知等方式及时告知受影响的用户。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">8.3 安全提示</h3>
          <p>
            请您妥善保管账号和验证码，<strong className="text-gray-900">切勿将短信验证码告知他人</strong>。因您个人原因导致的账号安全问题，我们不承担责任。
          </p>
        </section>

        {/* 9. 您的权利 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">9. 您的权利</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">9.1 查阅与更正</h3>
          <p>您可通过&ldquo;我的 → 编辑资料&rdquo;查阅和修改您的个人信息，包括昵称、头像、签名、学校等。</p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">9.2 删除权</h3>
          <p>您可以：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>删除您发布的内容（帖子、评论、二手商品等）；</li>
            <li>删除聊天消息；</li>
            <li>清除搜索历史（设备本地）。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">9.3 撤回授权</h3>
          <p>您可通过手机系统设置随时撤回对相机、相册、麦克风、定位等权限的授权。撤回后我们将停止收集相应信息，但不影响此前已进行的处理。</p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">9.4 账号注销</h3>
          <p>
            您可通过&ldquo;我的 → 设置 → 账号安全 → 注销账号&rdquo;提交注销申请。<strong className="text-gray-900">注销后您的账号信息、社交关系、发布内容将被清除且不可恢复。</strong>注销流程需要您进行二次确认以防止误操作。
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">9.5 行使权利的方式</h3>
          <p>
            您可通过本政策第13条提供的联系方式行使上述权利。我们将在<strong className="text-gray-900">15个工作日内</strong>响应您的请求，并可能需要验证您的身份。
          </p>
        </section>

        {/* 10. 未成年人保护 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">10. 未成年人保护</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">10.1 年龄要求</h3>
          <p>
            <strong className="text-gray-900">本应用主要面向年满18周岁的在校大学生。我们不主动面向未满14周岁的未成年人提供服务。</strong>
          </p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">10.2 未成年人信息处理</h3>
          <p>
            如果我们发现在未获得可验证的监护人同意的情况下收集了不满14周岁未成年人的个人信息，我们将尽快删除相关信息。如您是未成年人的监护人，发现被监护人向我们提供了个人信息，请通过本政策第13条的方式联系我们。
          </p>
        </section>

        {/* 11. 个人信息的共享 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">11. 个人信息的共享</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">11.1 共享原则</h3>
          <p>
            <strong className="text-gray-900">未经您的同意，我们不会向第三方共享您的可识别个人信息</strong>，但以下情形除外：
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>根据法律法规规定，或应政府主管部门依法要求；</li>
            <li>为维护我们或其他用户的合法权益所合理必需的；</li>
            <li>与本政策第6条所列第三方 SDK 提供方的数据共享。</li>
          </ul>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">11.2 公开披露</h3>
          <p>您在本应用公开发布的内容（帖子、评论等）将对其他用户可见，这属于您的主动公开行为。除此之外，我们不会公开披露您的个人信息。</p>
        </section>

        {/* 12. 隐私政策的更新 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">12. 隐私政策的更新</h2>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">12.1 更新机制</h3>
          <p>我们可能会根据业务调整或法律法规变化修订本政策。修订后的政策将在应用内公布并说明生效日期。</p>

          <h3 className="mb-2 mt-4 text-base font-medium text-gray-900">12.2 重大变更通知</h3>
          <p>
            如涉及处理目的、处理方式、个人信息种类的重大变化，或减少您的权利，我们将通过应用内弹窗方式征求您的<strong className="text-gray-900">明示同意</strong>。
          </p>
        </section>

        {/* 13. 联系我们 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">13. 联系我们</h2>
          <p>如您对本隐私政策有任何疑问、意见或建议，或需要行使您的个人信息权利，请通过以下方式联系我们：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-gray-900">运营主体：</strong>宁波拓扑森林科技有限公司</li>
            <li><strong className="text-gray-900">联系邮箱：</strong>support@topoforest.com</li>
            <li><strong className="text-gray-900">应用内反馈：</strong>我的 → 设置 → 帮助与反馈</li>
          </ul>
          <p className="mt-3">
            我们将在收到您的请求后<strong className="text-gray-900">15个工作日内</strong>予以回复。
          </p>
          <p className="mt-3">
            <strong className="text-gray-900">投诉与举报：</strong>如您认为我们的个人信息处理行为损害了您的合法权益，您可向<strong className="text-gray-900">浙江省互联网信息办公室</strong>、<strong className="text-gray-900">浙江省通信管理局</strong>、<strong className="text-gray-900">宁波市网信部门</strong>进行投诉举报，或向宁波拓扑森林科技有限公司所在地有管辖权的人民法院提起诉讼。
          </p>
        </section>

        {/* 14. 适用法律与争议解决 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">14. 适用法律与争议解决</h2>
          <p>
            本政策的订立、解释和争议解决均适用中华人民共和国法律（不含冲突法规则）。因本政策引起的争议，双方应友好协商解决；协商不成的，任何一方可向<strong className="text-gray-900">宁波拓扑森林科技有限公司所在地</strong>有管辖权的人民法院提起诉讼。
          </p>
        </section>

        {/* 附录一 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">附录一：个人信息收集清单</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-primary">
                  <th className="pb-2 pr-4 font-medium text-gray-900">业务场景</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">收集信息</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">收集方式</th>
                  <th className="pb-2 font-medium text-gray-900">必要性</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-primary">
                <tr><td className="py-2 pr-4">账号注册/登录</td><td className="py-2 pr-4">手机号码</td><td className="py-2 pr-4">阿里云一键登录或短信验证码</td><td className="py-2">必要</td></tr>
                <tr><td className="py-2 pr-4">完善个人资料</td><td className="py-2 pr-4">昵称、头像、性别、生日、签名、学校、专业、年级</td><td className="py-2 pr-4">用户主动填写</td><td className="py-2">可选</td></tr>
                <tr><td className="py-2 pr-4">学历认证</td><td className="py-2 pr-4">学信网学历信息（本地 OCR 提取）</td><td className="py-2 pr-4">用户主动操作</td><td className="py-2">可选</td></tr>
                <tr><td className="py-2 pr-4">发布内容</td><td className="py-2 pr-4">文字、图片、位置标签</td><td className="py-2 pr-4">用户主动提供</td><td className="py-2">必要（发布时）</td></tr>
                <tr><td className="py-2 pr-4">即时通讯</td><td className="py-2 pr-4">聊天文字、图片</td><td className="py-2 pr-4">用户主动发送</td><td className="py-2">必要（聊天时）</td></tr>
                <tr><td className="py-2 pr-4">语音消息</td><td className="py-2 pr-4">录音内容</td><td className="py-2 pr-4">用户主动录制</td><td className="py-2">可选</td></tr>
                <tr><td className="py-2 pr-4">搜索</td><td className="py-2 pr-4">搜索关键词</td><td className="py-2 pr-4">用户主动输入</td><td className="py-2">必要（搜索时）</td></tr>
                <tr><td className="py-2 pr-4">位置标签</td><td className="py-2 pr-4">地理位置</td><td className="py-2 pr-4">用户主动触发定位</td><td className="py-2">可选</td></tr>
                <tr><td className="py-2 pr-4">服务保障</td><td className="py-2 pr-4">设备型号、系统版本、应用版本</td><td className="py-2 pr-4">自动采集</td><td className="py-2">必要</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 附录二 */}
        <section>
          <h2 className="mb-3 text-lg font-medium text-gray-900">附录二：第三方SDK清单</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-primary">
                  <th className="pb-2 pr-4 font-medium text-gray-900">SDK 名称</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">提供方</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">用途</th>
                  <th className="pb-2 font-medium text-gray-900">收集信息类型</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-primary">
                <tr><td className="py-2 pr-4">阿里云号码认证 SDK</td><td className="py-2 pr-4">阿里云计算有限公司</td><td className="py-2 pr-4">本机号码一键登录</td><td className="py-2">手机号码、SIM 卡信息、设备标识、网络状态</td></tr>
                <tr><td className="py-2 pr-4">Google ML Kit（文字识别）</td><td className="py-2 pr-4">Google LLC</td><td className="py-2 pr-4">学历信息本地识别</td><td className="py-2">无（纯设备端处理）</td></tr>
                <tr><td className="py-2 pr-4">Google Fonts</td><td className="py-2 pr-4">Google LLC</td><td className="py-2 pr-4">字体加载</td><td className="py-2">网络请求信息</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 底部签名 */}
        <div className="border-t border-border-primary pt-6 text-center text-sm text-gray-400">
          <p className="font-medium text-gray-600">宁波拓扑森林科技有限公司</p>
          <p className="mt-1">本政策版本：V2.0 | 生效日期：2026年4月1日</p>
        </div>
      </div>
    </div>
    </div>
  );
}
