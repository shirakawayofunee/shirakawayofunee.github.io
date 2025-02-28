"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6559],
  {
    71086: function (e, i, t) {
      var n = t(85893);
      t(67294);
      var r = t(41248),
        a = t(83253),
        o = t.n(a),
        s = t(19521),
        l = t(17689),
        c = t(46413),
        d = t(1609),
        m = t(44509),
        h = t(53834),
        u = t(88651),
        g = t(84230),
        p = t(30886),
        f = t(17634),
        x = t(11402),
        v = t(29518),
        b = t(28086),
        w = t(69871),
        C = t(72544),
        Z = t(92929),
        y = t(60601),
        I = t(72143),
        L = t(58142),
        j = t(26288),
        N = t(44761),
        k = t(94409),
        S = t(32546);
      i.Z = (e) => {
        let {
            className: i,
            isOpen: t = !1,
            isReportingEnabled: a = !0,
            user: s,
            onRequestClose: C,
            openReportModal: Z,
            openBlockModal: y,
            openUnblockModal: I,
            isBlocked: S,
          } = e,
          E = (0, r.v9)((e) => e.session),
          M = (0, r.I0)(),
          B = (e) => () => {
            C(), "function" == typeof e && e();
          },
          G = () => {
            M((0, j.sO)({ isSignIn: !1 }));
          };
        return (0, n.jsx)(o(), {
          isOpen: t,
          contentLabel: "Edit check",
          shouldCloseOnOverlayClick: !0,
          onRequestClose: C,
          ariaHideApp: !1,
          style: D,
          contentElement: (e, i) => (0, n.jsx)(R, { ...e, children: i }),
          overlayElement: (e, i) => (0, n.jsx)(T, { ...e, children: i }),
          children: (0, n.jsx)(P, {
            className: i,
            isOpen: t,
            children: (0, n.jsxs)("div", {
              className: "menuInnerContainer",
              children: [
                !E.userID &&
                  (0, n.jsxs)("div", {
                    className: "signUpCTAGroup spaceBelow",
                    onClick: B(G),
                    children: [
                      (0, n.jsxs)("div", {
                        className: "logoGroup",
                        children: [
                          (0, n.jsx)(N.Z, {
                            className: "logo",
                            isFixedColor: !0,
                          }),
                          (0, n.jsx)("p", {
                            className: "tagline",
                            children: "Commissions made easy",
                          }),
                        ],
                      }),
                      (0, n.jsx)(l.Z, {
                        text: "Sign up",
                        size: "medium",
                        variant: "secondary",
                        isFixedColor: !0,
                      }),
                    ],
                  }),
                (0, n.jsxs)("div", {
                  className: "navLinksGroup spaceBelow",
                  children: [
                    (!E.userID &&
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)("div", {
                            className: "linkGroup",
                            onClick: B(() => M((0, j.sO)({ isSignIn: !0 }))),
                            children: (0, n.jsxs)("div", {
                              className: "linkGroupLeft",
                              children: [
                                (0, n.jsx)(c.Z, { className: "linkIcon" }),
                                (0, n.jsx)("p", {
                                  className: "linkText",
                                  children: "Log in",
                                }),
                              ],
                            }),
                          }),
                          (0, n.jsx)(d.Z, { className: "linkDivider" }),
                          (0, n.jsx)("a", {
                            className: "noLinkStyling",
                            href: L.default.FOR_ARTISTS_PAGE_URL,
                            children: (0, n.jsx)("div", {
                              className: "linkGroup",
                              children: (0, n.jsxs)("div", {
                                className: "linkGroupLeft",
                                children: [
                                  (0, n.jsx)(m.Z, { className: "linkIcon" }),
                                  (0, n.jsx)("p", {
                                    className: "linkText",
                                    children: "Become an artist+",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, n.jsx)(d.Z, { className: "linkDivider" }),
                          (0, n.jsx)("a", {
                            className: "noLinkStyling",
                            href: L.default.HELP_GUIDE_HOW_IT_WORKS,
                            target: "_blank",
                            children: (0, n.jsx)("div", {
                              className: "linkGroup",
                              children: (0, n.jsxs)("div", {
                                className: "linkGroupLeft",
                                children: [
                                  (0, n.jsx)(h.Z, { className: "linkIcon" }),
                                  (0, n.jsx)("p", {
                                    className: "linkText",
                                    children: "How VGen works",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, n.jsx)(d.Z, { className: "linkDivider" }),
                          (0, n.jsx)("a", {
                            className: "noLinkStyling",
                            href: L.default.HELP_DESK_URL,
                            target: "_blank",
                            children: (0, n.jsx)("div", {
                              className: "linkGroup",
                              children: (0, n.jsxs)("div", {
                                className: "linkGroupLeft",
                                children: [
                                  (0, n.jsx)(u.Z, { className: "linkIcon" }),
                                  (0, n.jsx)("p", {
                                    className: "linkText",
                                    children: "Help",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          a &&
                            (null == E ? void 0 : E.userID) &&
                            (0, n.jsxs)("div", {
                              children: [
                                (0, n.jsx)(d.Z, { className: "linkDivider" }),
                                (0, n.jsx)("div", {
                                  className: "linkGroup",
                                  onClick: B(G),
                                  children: (0, n.jsxs)("div", {
                                    className: "linkGroupLeft",
                                    children: [
                                      (0, n.jsx)(g.Z, {
                                        className: "linkIcon",
                                      }),
                                      (0, n.jsx)("p", {
                                        className: "linkText",
                                        children: "Block @".concat(
                                          null == s ? void 0 : s.username
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, n.jsx)(d.Z, { className: "linkDivider" }),
                                (0, n.jsx)("div", {
                                  className: "linkGroup",
                                  onClick: B(G),
                                  children: (0, n.jsxs)("div", {
                                    className: "linkGroupLeft",
                                    children: [
                                      (0, n.jsx)(p.Z, {
                                        className: "linkIcon",
                                      }),
                                      (0, n.jsx)("p", {
                                        className: "linkText",
                                        children: "Report @".concat(
                                          null == s ? void 0 : s.username
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                        ],
                      })) ||
                      (a &&
                        (null == E ? void 0 : E.userID) &&
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("div", {
                              className: "linkGroup",
                              onClick: B(S ? I : y),
                              children: (0, n.jsxs)("div", {
                                className: "linkGroupLeft",
                                children: [
                                  (0, n.jsx)(g.Z, { className: "linkIcon" }),
                                  (0, n.jsx)("p", {
                                    className: "linkText",
                                    children: ""
                                      .concat(S ? "Unblock" : "Block", " @")
                                      .concat(null == s ? void 0 : s.username),
                                  }),
                                ],
                              }),
                            }),
                            (0, n.jsx)(d.Z, { className: "linkDivider" }),
                            (0, n.jsx)("div", {
                              className: "linkGroup",
                              onClick: B(Z),
                              children: (0, n.jsxs)("div", {
                                className: "linkGroupLeft",
                                children: [
                                  (0, n.jsx)(p.Z, { className: "linkIcon" }),
                                  (0, n.jsx)("p", {
                                    className: "linkText",
                                    children: "Report @".concat(
                                      null == s ? void 0 : s.username
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        })),
                    !E.userID &&
                      (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                          className: "socialsAndPolicy",
                          children: [
                            (0, n.jsx)(d.Z, { className: "linkDivider" }),
                            (0, n.jsx)(k.Z, {}),
                            (0, n.jsxs)("div", {
                              className: "socials",
                              children: [
                                (0, n.jsx)("a", {
                                  className: "social",
                                  href: L.default.SOCIAL_TWITTER_LINK,
                                  target: "_blank",
                                  children: (0, n.jsx)(f.Z, {
                                    className: "socialIcon",
                                  }),
                                }),
                                (0, n.jsx)("a", {
                                  className: "social",
                                  href: L.default.SOCIAL_DISCORD_LINK,
                                  target: "_blank",
                                  children: (0, n.jsx)(x.Z, {
                                    className: "socialIcon",
                                  }),
                                }),
                                (0, n.jsx)("a", {
                                  className: "social",
                                  href: L.default.SOCIAL_TIKTOK_LINK,
                                  target: "_blank",
                                  children: (0, n.jsx)(v.Z, {
                                    className: "socialIcon",
                                  }),
                                }),
                                (0, n.jsx)("a", {
                                  className: "social",
                                  href: L.default.SOCIAL_INSTAGRAM_LINK,
                                  target: "_blank",
                                  children: (0, n.jsx)(b.Z, {
                                    className: "socialIcon",
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "policyLinks",
                              children: [
                                (0, n.jsx)("a", {
                                  href: L.default.TERMS_OF_SERVICE_URL,
                                  target: "_blank",
                                  children: (0, n.jsx)("p", {
                                    children: "Terms of service",
                                  }),
                                }),
                                (0, n.jsx)("a", {
                                  href: L.default.PRIVACY_POLICY_URL,
                                  target: "_blank",
                                  children: (0, n.jsx)("p", {
                                    children: "Privacy policy",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "cancelGroup",
                  children: (0, n.jsxs)("div", {
                    className: "linkGroup",
                    onClick: B(),
                    children: [
                      (0, n.jsx)(w.Z, { className: "linkIcon" }),
                      (0, n.jsx)("p", {
                        className: "linkText",
                        children: "Cancel",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
      let D = {
          content: {
            border: "none",
            backgroundColor: C.Z.TRANSPARENT,
            inset: "auto 0.625rem 1rem 0.625rem",
            outline: "none",
            overflow: "hidden",
            padding: "0rem",
            position: "absolute",
          },
          overlay: { backgroundColor: S.Z.BLACK_LIGHT },
        },
        R = s.ZP.div.withConfig({ componentId: "sc-137e832-0" })(
          ["box-sizing:border-box;z-index:", ";"],
          Z.Z.MODALS
        ),
        T = s.ZP.div.withConfig({ componentId: "sc-137e832-1" })(
          [
            "align-items:center;display:flex;inset:0rem;justify-content:center;position:fixed;z-index:",
            ";",
          ],
          Z.Z.MODALS
        ),
        P = s.ZP.div.withConfig({ componentId: "sc-137e832-2" })(
          [
            "#urlToProfileExpandedMobileMenu{display:none;}.menuInnerContainer{width:100%;.spaceBelow{margin-bottom:0.5rem;}a.noLinkStyling{&:hover{text-decoration:none;}}.linkGroup{align-items:center;box-sizing:border-box;display:flex;height:2.75rem;justify-content:space-between;width:100%;.linkGroupLeft{align-items:center;display:flex;}.linkIcon{fill:",
            ";flex-grow:0;flex-shrink:0;height:1.5rem;margin-right:1rem;width:1.5rem;}.linkText{color:",
            ";flex-grow:1;font-size:",
            ";font-weight:",
            ";line-height:1.25rem;}&.disabledLink{.linkIcon{fill:",
            ";}.linkText{color:",
            ";}}}.signUpCTAGroup{align-items:center;background:",
            ";border-radius:1.25rem;box-shadow:",
            ";box-sizing:border-box;display:flex;height:5.75rem;justify-content:space-between;padding:1rem;position:relative;.logoGroup{.logo{height:2.5rem;width:8.125rem;}.tagline{color:",
            ";font-size:",
            ";font-weight:",
            ";line-height:1.25rem;}}.wishlistOptionDescriptionGroup{width:100%;}}.navLinksGroup{background-color:",
            ";border-radius:1rem;box-shadow:",
            ";box-sizing:border-box;padding:0.5rem 1rem 0.5rem 1rem;.socialsAndPolicy{margin-bottom:0.75rem;}.linkDivider{margin:0.375rem 0;&.extraSpaceBelow{margin-bottom:1rem;}}.socials{margin:1rem 0 0.25rem 0;.social{margin-right:1rem;padding:0.25rem;.socialIcon{fill:",
            ";height:1.5rem;width:1.5rem;}}}.policyLinks{display:flex;> *{color:",
            ";font-size:",
            ";font-weight:",
            ";line-height:1rem;margin-right:1.5rem;padding:0.5rem 0;text-decoration:none;&:last-child{margin-right:0;}}}}.cancelGroup{align-items:center;background-color:",
            ";border-radius:1rem;box-shadow:",
            ";box-sizing:border-box;display:flex;height:3.75rem;padding:0 1rem;}}",
          ],
          C.Z.BLACK,
          C.Z.BLACK,
          y.Z.BODY_SIZES.L,
          y.Z.WEIGHTS.BOLD,
          C.Z.BLACK_LIGHTEST_2,
          C.Z.BLACK_LIGHTEST_2,
          C.Z.GRADIENT_HIGHLIGHTER,
          I.Z.ELEVATION_2,
          S.Z.BLACK_LIGHTER,
          y.Z.BODY_SIZES.S,
          y.Z.WEIGHTS.REGULAR,
          C.Z.GRAY_LIGHTER,
          I.Z.ELEVATION_2,
          C.Z.BLACK,
          C.Z.BLACK_LIGHTEST_2,
          y.Z.BODY_SIZES.S,
          y.Z.WEIGHTS.REGULAR,
          C.Z.GRAY_LIGHTER,
          I.Z.ELEVATION_2
        );
    },
    52600: function (e, i, t) {
      var n = t(85893);
      t(67294);
      var r = t(19521),
        a = t(72544),
        o = t(92929),
        s = t(44761);
      i.Z = (e) => {
        let { isVisible: i } = e;
        return (0, n.jsx)(l, {
          isVisible: i,
          children: i && (0, n.jsx)(s.Z, { height: "48px", width: "120px" }),
        });
      };
      let l = r.ZP.div.withConfig({ componentId: "sc-4165cf1b-0" })(
        [
          "align-items:center;background-color:",
          ";box-sizing:border-box;display:flex;height:100vh;justify-content:center;position:fixed;width:100vw;z-index:",
          ";",
          "",
        ],
        a.Z.GRAY_LIGHTER,
        o.Z.LOADING_SCREEN,
        (e) => !e.isVisible && "display: none;"
      );
    },
    47552: function (e, i, t) {
      var n = t(85893),
        r = t(19521),
        a = t(72544),
        o = t(92929),
        s = t(86398),
        l = t(89468),
        c = t(66577),
        d = t(17689),
        m = t(1500);
      i.Z = (e) => {
        let {
            onRequestShowContent: i,
            isFullScreen: t = !0,
            displayVariant: r,
            backButtonLabel: o = "Back",
            goBack: s,
          } = e,
          m = t || "FULL" === r;
        return (0, n.jsx)(t ? h : u, {
          hasRoundedCorners: "FULL" !== r,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: (0, n.jsxs)("div", {
            className: "contentContainer",
            children: [
              m &&
                (0, n.jsx)(l.Z, {
                  className: "matureContentIcon",
                  fill: a.Z.GRAY_DARK,
                  height: "2rem",
                  width: "2rem",
                }),
              (0, n.jsx)(c.Z, {
                className: "matureContentHeader",
                variant: m ? "Subheader/S" : "Medium/S",
                children: "Mature content",
              }),
              (0, n.jsx)(c.Z, {
                className: "matureContentBody",
                variant: m ? "Text/S - Light" : "Mini/Light",
                colour: a.Z.BLACK_LIGHTER,
                children: "Contains sensitive content",
              }),
              (0, n.jsx)(d.Z, {
                onClick: i,
                text: "Show me, I'm 18+",
                variant: "secondary",
                size: m ? "large" : "small",
              }),
              "function" == typeof s &&
                (0, n.jsx)(d.Z, {
                  className: "escapeBtn",
                  onClick: s,
                  text: o,
                  variant: "neutral-light",
                  size: "medium",
                }),
            ],
          }),
        });
      };
      let h = r.ZP.div.withConfig({ componentId: "sc-61f928ae-0" })(
          [
            "background-color:rgba(248,247,248,0.5);backdrop-filter:blur(80px);height:calc(100vh - ",
            ");left:0;position:fixed;top:",
            ";width:100%;z-index:",
            ";@media (min-width:",
            "){height:calc(100vh - ",
            ");top:",
            ";}@media (min-width:",
            "){height:calc(100vh - ",
            ");top:",
            ";}@media (min-width:",
            "){height:calc(100vh - ",
            ");top:",
            ";}@media (min-width:",
            "){height:calc(100vh - ",
            ");top:",
            ";}.escapeBtn{margin-top:1rem;}.contentContainer{align-items:center;display:flex;flex-direction:column;justify-content:center;height:calc(100% - ",
            ");width:100%;@media (min-width:",
            "){height:calc(100% - ",
            ");}@media (min-width:",
            "){height:calc(100% - ",
            ");}@media (min-width:",
            "){height:calc(100% - ",
            ");}@media (min-width:",
            "){height:calc(100% - ",
            ");}.matureContentIcon{margin-bottom:1.125rem;}.matureContentHeader{margin-bottom:0.25rem;}.matureContentBody{margin-bottom:2rem;}}",
          ],
          m.L.XS,
          m.L.XS,
          o.Z.PRIMARY_NAVIGATION,
          s.Z.MD,
          m.L.MD,
          m.L.MD,
          s.Z.LG,
          m.L.LG,
          m.L.LG,
          s.Z.XL,
          m.L.XL,
          m.L.XL,
          s.Z.XXL,
          m.L.XXL,
          m.L.XXL,
          m.L.XS,
          s.Z.MD,
          m.L.MD,
          s.Z.LG,
          m.L.LG,
          s.Z.XL,
          m.L.XL,
          s.Z.XXL,
          m.L.XXL
        ),
        u = r.ZP.div.withConfig({ componentId: "sc-61f928ae-1" })(
          [
            "background-color:rgba(248,247,248,0.5);backdrop-filter:blur(80px);height:100%;left:0;position:absolute;top:0;width:100%;display:flex;flex-direction:column;align-items:center;z-index:",
            ";pointer-events:all;justify-content:center;",
            " .escapeBtn{margin-top:0.5rem;}.contentContainer{align-items:center;display:flex;flex-direction:column;justify-content:center;.matureContentBody{margin-bottom:1rem;}}",
          ],
          o.Z.ELEMENTS,
          (e) => e.hasRoundedCorners && "border-radius: 2.5rem;"
        );
    },
    7712: function (e, i, t) {
      var n = t(85893);
      t(67294);
      var r = t(19521),
        a = t(27484),
        o = t.n(a),
        s = t(44168),
        l = t(12595),
        c = t(69871),
        d = t(17689),
        m = t(72690),
        h = t(71619),
        u = t(15751),
        g = t(72544),
        p = t(60601);
      i.Z = (e) => {
        let {
            isOpen: i,
            policy: t = {},
            displayName: r,
            onRequestClose: a,
            policyType: g = "Terms of Service",
            isDisplayOnly: p = !0,
            onEditCallback: x,
            onSave: v,
            error: b,
            onClearError: w,
            hasZIndexPriority: C = !1,
            subHeading: Z,
            contents: y,
            richTextEditorProps: I = {},
          } = e,
          L = "Updated ".concat(
            o()(t.modified || t.created).format("MMM D, YYYY")
          );
        return (0, n.jsx)(s.Z, {
          isOpen: i,
          onRequestClose: a,
          maxContentWidth: "37.5rem",
          hasZIndexPriority: C,
          children: (0, n.jsxs)(f, {
            children: [
              (0, n.jsx)(l.Z, {
                contentLeft: (0, n.jsx)(c.Z, {
                  className: "headerIcon",
                  height: "2rem",
                  width: "2rem",
                  onClick: a,
                }),
                contentRight:
                  !p && (0, n.jsx)(d.Z, { text: "Save", onClick: v }),
              }),
              (0, n.jsx)(m.Z, {
                children: (0, n.jsxs)("div", {
                  className: "mainModalContent",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "policyHeadingGroup",
                      children: [
                        (0, n.jsx)("h4", {
                          className: "policyHeading",
                          children: "".concat(r, "'s ").concat(g),
                        }),
                        (0, n.jsx)("p", {
                          className: "policyUpdated",
                          children: Z || L,
                        }),
                      ],
                    }),
                    (0, n.jsx)(h.Z, {
                      variant: "error",
                      message: b,
                      onClose: w,
                    }),
                    (0, n.jsx)(u.Z, {
                      variant: "display",
                      value: t.text,
                      isDisplayOnly: p,
                      onEditCallback: x,
                      minHeight: p ? void 0 : "20rem",
                      ...I,
                    }),
                    y,
                  ],
                }),
              }),
            ],
          }),
        });
      };
      let f = r.ZP.div.withConfig({ componentId: "sc-c42e0dfd-0" })(
        [
          "position:relative;.headerIcon{cursor:pointer;}.mainModalContent{padding-top:0.25rem;margin-bottom:3rem;.policyHeadingGroup{margin-bottom:2rem;.policyHeading{color:",
          ";font-size:",
          ";font-weight:",
          ";line-height:2.125rem;}.policyUpdated{color:",
          ";font-size:",
          ";font-weight:",
          ";line-height:1rem;}}}",
        ],
        g.Z.BLACK,
        p.Z.TITLE_SIZES.XS,
        p.Z.WEIGHTS.BLACK,
        g.Z.BLACK_LIGHTEST_2,
        p.Z.BODY_SIZES.S,
        p.Z.WEIGHTS.REGULAR
      );
    },
    53787: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return d;
        },
      });
      var n = t(85893),
        r = t(19521),
        a = t(17689),
        o = t(66577),
        s = t(7707),
        l = t(72544),
        c = t(72143);
      function d(e) {
        let {
          className: i,
          size: t = "large",
          isChecked: r = !1,
          onClick: c,
        } = e;
        return (0, n.jsx)(m, {
          className: i,
          children: (0, n.jsx)(a.Z, {
            className: "previewBtn",
            text: (0, n.jsxs)("div", {
              className: "previewToggleText",
              children: [
                (0, n.jsx)(o.Z, {
                  variant: "Medium/M",
                  colour: l.Z.WHITE,
                  children: "Preview",
                }),
                (0, n.jsx)(s.Z, {
                  className: "previewToggle",
                  checked: r,
                  size: "small",
                  variant: r ? "dark" : "dark-light",
                  onChange: c,
                }),
              ],
            }),
            variant: r ? "light-dark" : "secondary",
            size: t,
            onClick: c,
          }),
        });
      }
      let m = r.ZP.div.withConfig({ componentId: "sc-d36e36a8-0" })(
        [
          ".previewBtn{margin-left:auto;box-shadow:",
          ";}.previewToggleText{display:inline-flex;align-items:center;flex-direction:row;gap:0.5rem;justify-content:space-between;pointer-events:none;}",
        ],
        c.Z.ELEVATION_3
      );
    },
    86540: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return o;
        },
        x: function () {
          return s;
        },
      });
      var n = t(85893),
        r = t(19521),
        a = t(86398);
      function o(e) {
        let { className: i, bannerImageURL: t, blur: r = !1 } = e;
        return (0, n.jsx)(l, {
          className: i,
          bannerImageURL: t,
          children: (0, n.jsx)(c, { blur: r }),
        });
      }
      let s = {
          XS: "13.125rem",
          MD: "16rem",
          LG: "calc(30.6vw - 2.9665rem)",
          XL: "20rem",
          XXL: "20rem",
        },
        l = r.ZP.div.withConfig({ componentId: "sc-57b4ffbb-0" })(
          [
            "position:relative;width:100%;background-position:center;background-repeat:no-repeat;background-size:cover;pointer-events:none;",
            " height:",
            ";@media (min-width:",
            "){height:",
            ";}@media (min-width:",
            "){height:",
            ";}@media (min-width:",
            "){height:",
            ";}@media (min-width:",
            "){height:",
            ";}",
          ],
          (e) =>
            "background-image: url('".concat(
              e.bannerImageURL || "/img/placeholder-banner.webp",
              "');"
            ),
          s.XS,
          a.Z.MD,
          s.MD,
          a.Z.LG,
          s.LG,
          a.Z.XL,
          s.XL,
          a.Z.XXL,
          s.XXL
        ),
        c = r.ZP.div.withConfig({ componentId: "sc-57b4ffbb-1" })(
          [
            "position:absolute;inset 0;background:linear-gradient( 180deg,rgba(12,9,13,0.4) 0%,rgba(12,9,13,0.18) 22.92%,rgba(12,9,13,0.12) 35.42%,rgba(12,9,13,0.06) 56.25%,rgba(12,9,13,0) 100% );",
            "",
          ],
          (e) => e.blur && "backdrop-filter: blur(0.5rem);"
        );
    },
    1500: function (e, i, t) {
      t.d(i, {
        L: function () {
          return O;
        },
      });
      var n = t(85893),
        r = t(67294),
        a = t(41248),
        o = t(41664),
        s = t.n(o),
        l = t(19521),
        c = t(10643),
        d = t(87642),
        m = t(12184),
        h = t(17689),
        u = t(24520),
        g = t(42397),
        p = t(46413),
        f = t(88368),
        x = t(61959),
        v = t(52390),
        b = t(3478),
        w = t(15777),
        C = t(92929),
        Z = t(72544),
        y = t(86398),
        I = t(72143),
        L = t(60601),
        j = t(58142),
        N = t(71523),
        k = t(71086),
        S = t(26437),
        D = t(9913),
        R = t(52540),
        T = t(64527),
        P = t(7663),
        E = t(17784),
        M = t(76982),
        B = t(26288),
        G = t(32546),
        A = t(906);
      i.Z = (e) => {
        var i, t, o;
        let {
            className: l,
            backgroundImage: C = "/img/placeholder-banner.webp",
            primaryCurrency: Z,
            updatePrimaryCurrency: y = () => {},
            user: I,
            character: L,
            openReportModal: G = () => {},
            openBlockModal: O = () => {},
            openUnblockModal: H = () => {},
            showUsername: z = !0,
            isBlocked: U,
            isForcedOpaque: F,
          } = e,
          K = (0, A.Z)(),
          X = (0, M.g1)(),
          W = (0, a.v9)((e) => e.session),
          Y = (0, a.v9)((e) => e.chat),
          V = (0, a.v9)((e) => e.notifications),
          q = (0, a.I0)(),
          [$, Q] = (0, r.useState)(!0),
          [J, ee] = (0, r.useState)(!1),
          [ei, et] = (0, r.useState)(!1),
          [en, er] = (0, r.useState)(!1),
          ea = !F && $,
          eo = () => {
            try {
              window.pageYOffset ||
              (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop
                ? Q(!1)
                : Q(!0);
            } catch (e) {
              Q(!1);
            }
          };
        (0, r.useEffect)(
          () => (
            document.addEventListener("scroll", eo),
            () => {
              document.removeEventListener("scroll", eo);
            }
          ),
          []
        ),
          (0, r.useEffect)(() => {
            Y.isModalOpen &&
              !Y.isMinimized &&
              (er(!1), ee(!1), q((0, T.GX)(!1)));
          }, [Y.isModalOpen, Y.isMinimized]);
        let es = () => {
            ee(!J);
          },
          el = () => {
            et(!ei);
          },
          ec = () => {
            er(!en);
          };
        return (0, n.jsxs)(_, {
          className: l,
          isTransparent: ea,
          backgroundImage: C,
          isUserArtist:
            I &&
            (0, N.qX)(
              null == I
                ? void 0
                : null === (i = I.moderation) || void 0 === i
                ? void 0
                : i.role,
              "BASIC"
            ),
          children: [
            (0, n.jsx)(S.Z, {
              inset: E.Z.NAV_MENUS,
              isOpen: en,
              onRequestClose: ec,
            }),
            (0, n.jsx)(R.Z, {
              inset: E.Z.NAV_MENUS,
              isOpen: Y.isLauncherOpen,
              onRequestClose: () => q((0, T.GX)({ isLauncherOpen: !1 })),
            }),
            (0, n.jsxs)("div", {
              className: "headerContentContainer",
              children: [
                (0, n.jsxs)("div", {
                  className: "headerContent",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "left",
                      children: [
                        (0, n.jsx)(s(), {
                          href: "/",
                          children: (0, n.jsxs)("div", {
                            className: "logoGroup",
                            children: [
                              (0, n.jsx)(c.Z, {
                                className: "previousPageIcon",
                              }),
                              (0, n.jsx)("img", {
                                className: "logoIcon onlyOnTransparent",
                                src: "/img/logo-icon-green-outline.svg",
                                alt: "VGen logo",
                              }),
                              (0, n.jsx)("img", {
                                className: "logoIcon",
                                src: "/img/logo-icon-black-outline.svg",
                                alt: "VGen logo",
                              }),
                            ],
                          }),
                        }),
                        ((null == I ? void 0 : I.username) ||
                          (null == L ? void 0 : L.slug)) &&
                          z &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (null == I ? void 0 : I.username)
                                ? (0, n.jsxs)("p", {
                                    className: "linkToProfile",
                                    children: [
                                      "/",
                                      (0, n.jsx)("span", {
                                        children:
                                          null == I ? void 0 : I.username,
                                      }),
                                    ],
                                  })
                                : (0, n.jsxs)("p", {
                                    className: "linkToProfile",
                                    children: [
                                      "/c/ ",
                                      (0, n.jsx)("span", {
                                        children: null == L ? void 0 : L.slug,
                                      }),
                                    ],
                                  }),
                              (0, n.jsx)(d.Z, {
                                className: "copyIcon",
                                onClick: (e) => {
                                  e.stopPropagation(),
                                    K(
                                      (null == I ? void 0 : I.username)
                                        ? ""
                                            .concat(
                                              j.default.FRONT_END_URL,
                                              "/"
                                            )
                                            .concat(
                                              null == I ? void 0 : I.username
                                            )
                                        : ""
                                            .concat(
                                              j.default.FRONT_END_URL,
                                              "/c/"
                                            )
                                            .concat(
                                              null == L ? void 0 : L.slug
                                            ),
                                      {
                                        message: "".concat(
                                          (null == I ? void 0 : I.username)
                                            ? "Profile"
                                            : "Character profile",
                                          " link"
                                        ),
                                      }
                                    );
                                },
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "right",
                      children: [
                        I &&
                          (0, N.qX)(
                            null == I
                              ? void 0
                              : null === (t = I.moderation) || void 0 === t
                              ? void 0
                              : t.role,
                            "BASIC"
                          ) &&
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)(m.Z, {
                                className: "currency",
                                choices: w.Z.STRIPE_SUPPORTED.map((e) => ({
                                  label: e,
                                  value: e,
                                })),
                                selected: Z,
                                variant:
                                  (ea && "light") || (!ea && "neutral-light"),
                                size: "medium",
                                optionFontWeight: "bold",
                                onChange: y,
                                isFixedColor: ea,
                              }),
                              (0, n.jsx)(m.Z, {
                                className: "currency mobileOnly",
                                choices: w.Z.STRIPE_SUPPORTED.map((e) => ({
                                  label: e,
                                  value: e,
                                })),
                                selected: Z,
                                variant:
                                  (ea && "light") || (!ea && "neutral-light"),
                                size: "small",
                                optionFontWeight: "bold",
                                onChange: y,
                                isFixedColor: ea,
                              }),
                            ],
                          }),
                        (!W.userID &&
                          (0, n.jsx)(h.Z, {
                            className: "desktopOnlyButton",
                            text: "Sign up",
                            size: "medium",
                            onClick: () => q((0, B.sO)({ isSignIn: !1 })),
                            isFixedColor: !0,
                          })) ||
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              X &&
                                (0, n.jsx)(P.Z, {
                                  variant: ea
                                    ? "translucent-darker"
                                    : "neutral",
                                  hasWhiteIcon: ea,
                                  isFixedColor: ea,
                                }),
                              (0, n.jsxs)("div", {
                                className:
                                  "notificationButtonContainer ".concat(
                                    en ? "notificationMenuOpen" : ""
                                  ),
                                onClick: ec,
                                children: [
                                  V.hasUnread &&
                                    (0, n.jsx)(D.Z, {
                                      className: "notificationDot",
                                    }),
                                  (0, n.jsx)(u.Z, {
                                    size: "x-large",
                                    variant: ea
                                      ? "translucent-darker"
                                      : "neutral",
                                    isFixedColor: ea,
                                    children: (0, n.jsx)(g.Z, {
                                      className: "menuIcon",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        W.userID &&
                          W.userID === (null == I ? void 0 : I.userID) &&
                          (0, N.qX)(
                            null == I
                              ? void 0
                              : null === (o = I.moderation) || void 0 === o
                              ? void 0
                              : o.role,
                            "BASIC"
                          ) &&
                          (0, n.jsx)(s(), {
                            href: ""
                              .concat(j.default.FRONT_END_URL)
                              .concat(j.default.CREATOR_DASHBOARD_PATH),
                            children: (0, n.jsx)(h.Z, {
                              className: "desktopOnlyButton",
                              text: "Artist dashboard",
                              size: "medium",
                              variant: "secondary",
                            }),
                          }),
                        (0, n.jsx)(h.Z, {
                          className: "desktopOnlyButton",
                          prefix:
                            (!W.userID &&
                              (0, n.jsx)(p.Z, { className: "menuIcon" })) ||
                            (0, n.jsx)(f.Z, {
                              src: W.avatarURL,
                              size: "xx-small",
                            }),
                          suffix: (0, n.jsx)(x.Z, {
                            className: "menuIcon insideButton",
                          }),
                          size: "medium",
                          variant: "light",
                          customPadding: "0.5rem",
                          onClick: es,
                          isFixedColor: !0,
                        }),
                        W.userID !== (null == I ? void 0 : I.userID) &&
                          ((!ea &&
                            (0, n.jsx)(u.Z, {
                              className: "mobileOnlyButton",
                              size: "large",
                              variant: "neutral",
                              onClick: el,
                              children: (0, n.jsx)(v.Z, {
                                className: "menuIcon",
                              }),
                            })) ||
                            (0, n.jsx)(u.Z, {
                              className: "mobileOnlyButton",
                              size: "large",
                              variant: "translucent-darker",
                              onClick: el,
                              isFixedColor: !0,
                              children: (0, n.jsx)(v.Z, {
                                className: "menuIcon",
                              }),
                            })),
                        (0, n.jsx)(b.Z, { isOpen: J, onRequestClose: es }),
                        I &&
                          (0, n.jsx)(k.Z, {
                            isOpen: ei,
                            user: I,
                            openReportModal: G,
                            openBlockModal: O,
                            openUnblockModal: H,
                            onRequestClose: el,
                            isBlocked: U,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "headerBackgroundShadowOverlay",
                }),
                (0, n.jsx)("div", {
                  className: "headerBackgroundImageContainer",
                  children: (0, n.jsx)("div", {
                    className: "headerBackgroundImage",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      let O = {
          XS: "3.25rem",
          MD: "4rem",
          LG: "4rem",
          XL: "4rem",
          XXL: "4rem",
        },
        _ = l.ZP.header.withConfig({ componentId: "sc-bb6a5896-0" })(
          [
            "height:",
            ";position:fixed;width:100%;z-index:",
            ";",
            " @media (min-width:",
            "){",
            "}@media (min-width:",
            "){height:",
            ";}@media (min-width:",
            "){height:",
            ";}@media (min-width:",
            "){height:",
            ";}@media (min-width:",
            "){height:",
            ";}.headerBackgroundShadowOverlay{display:none;inset:0px;overflow:hidden;position:absolute;z-index:1;@media (min-width:",
            "){display:block;background:linear-gradient( 180deg,rgba(12,9,13,0.1) 0%,rgba(12,9,13,0.04) 59.9%,rgba(12,9,13,0) 100% );}}.headerBackgroundImageContainer{display:none;inset:0px;overflow:hidden;position:absolute;z-index:1;@media (min-width:",
            "){display:block;}.headerBackgroundImage{filter:blur(3.5rem);-webkit-filter:blur(3.5rem);inset:0px;position:absolute;transform:translate3d(0,0,0);z-index:1;",
            "}}.headerContentContainer{height:100%;position:relative;width:100%;.headerContent{align-items:center;display:flex;inset:0 1.5rem;justify-content:space-between;position:absolute;z-index:2;",
            " .left{align-items:center;display:flex;filter:drop-shadow(",
            ");position:relative;.logoGroup{align-items:center;cursor:pointer;display:flex;.previousPageIcon{height:1.25rem;margin-right:0.125rem;width:1.25rem;@media (min-width:",
            "){display:none;}",
            "}.logoIcon{display:block;height:2.5rem;margin-right:0.25rem;width:2.5rem;@media (min-width:",
            "){height:3rem;width:3rem;}",
            " &.onlyOnTransparent{display:none;",
            "}}}p.linkToProfile{color:",
            ";font-size:",
            ";font-weight:",
            ";margin-right:0.4375rem;",
            " > span{font-size:",
            ";font-weight:",
            ";}@media (min-width:",
            "){font-size:",
            ";> span{font-size:",
            ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}}}.copyIcon{cursor:pointer;fill:",
            ";height:1.125rem;width:1.125rem;",
            "}}.right{align-items:center;display:flex;position:relative;> *{margin-left:0.5rem;&:first-child{margin-left:0;}}.desktopOnlyButton{display:none;@media (min-width:",
            "){display:flex;}}.mobileOnlyButton{@media (min-width:",
            "){display:none;}}.notificationButtonContainer{display:none;@media (min-width:",
            "){display:block;position:relative;}.notificationDot{position:absolute;right:-0.125rem;top:-0.125rem;z-index:1;}&.notificationMenuOpen{border-radius:2rem;outline:2px solid ",
            ";}}.currency{display:none;width:5rem;@media (min-width:",
            "){display:block;}&.mobileOnly{display:block;@media (min-width:",
            "){display:none;}}}.menuIcon{height:1.25rem;width:1.25rem;",
            " &.insideButton{margin-left:0.375rem;}}.expandedMenuButtonInner{display:flex;}}}}",
          ],
          O.XS,
          C.Z.PRIMARY_NAVIGATION,
          (e) =>
            !e.isTransparent &&
            "background-color: ".concat(Z.Z.GRAY_LIGHTER, ";"),
          y.Z.MD,
          (e) => {
            if (!e.isTransparent)
              return (0, l.iv)(["background-color:", ";"], Z.Z.GRAY_LIGHTER);
          },
          y.Z.MD,
          O.MD,
          y.Z.LG,
          O.LG,
          y.Z.XL,
          O.XL,
          y.Z.XXL,
          O.XXL,
          y.Z.MD,
          y.Z.MD,
          (e) => {
            if (!e.isTransparent)
              return (0, l.iv)(
                [
                  "background-image:url('",
                  "');background-position:center;background-size:cover;",
                ],
                e.backgroundImage
              );
          },
          (e) =>
            e.isUserArtist
              ? (0, l.iv)(
                  [
                    "inset:0 0.75rem 0 0.25rem;@media (min-width:",
                    "){inset:0 1.5rem;}",
                  ],
                  y.Z.MD
                )
              : (0, l.iv)(
                  ["inset:0 0.75rem;@media (min-width:", "){inset:0 1.5rem;}"],
                  y.Z.MD
                ),
          I.Z.ELEVATION_2,
          y.Z.MD,
          (e) =>
            e.isTransparent
              ? (0, l.iv)(["fill:", ";"], G.Z.WHITE)
              : (0, l.iv)(["fill:", ";"], Z.Z.BLACK),
          y.Z.MD,
          (e) => {
            if (e.isTransparent) return (0, l.iv)(["display:none;"]);
          },
          (e) => {
            if (e.isTransparent) return (0, l.iv)(["display:block;"]);
          },
          G.Z.WHITE,
          L.Z.BODY_SIZES.XL,
          L.Z.WEIGHTS.MEDIUM,
          (e) => {
            if (!e.isTransparent) return (0, l.iv)(["color:", ";"], Z.Z.BLACK);
          },
          L.Z.SUBHEADING_SIZES.XS,
          L.Z.WEIGHTS.BLACK,
          y.Z.MD,
          L.Z.HEADING_SIZES.XS,
          L.Z.SUBHEADING_SIZES.S,
          G.Z.WHITE,
          (e) => {
            if (!e.isTransparent) return (0, l.iv)(["fill:", ";"], Z.Z.BLACK);
          },
          y.Z.MD,
          y.Z.MD,
          y.Z.MD,
          G.Z.WHITE,
          y.Z.MD,
          y.Z.MD,
          (e) =>
            e.isTransparent
              ? (0, l.iv)(["fill:", ";"], G.Z.WHITE)
              : (0, l.iv)(["fill:", ";"], Z.Z.BLACK)
        );
    },
    21025: function (e, i, t) {
      var n = t(85893),
        r = t(67294),
        a = t(19521),
        o = t(72544),
        s = t(86398),
        l = t(60601),
        c = t(38473),
        d = t(17689),
        m = t(7118),
        h = t(49774),
        u = t(42936),
        g = t(58142),
        p = t(41248),
        f = t(75915),
        x = t(26288),
        v = t(65382),
        b = t(76982),
        w = t(19329),
        C = t(69260),
        Z = t.n(C),
        y = t(89229),
        I = t(23493),
        L = t.n(I),
        j = t(15299);
      let N = "small",
        k = {
          SMALL: {
            MD_DOWN_COLS: 2,
            MD_UP_COLS: 2,
            LG_UP_COLS: 3,
            XL_UP_COLS: 4,
            XXXL_UP_COLS: 5,
          },
          LARGE: {
            MD_DOWN_COLS: 2,
            MD_UP_COLS: 1,
            LG_UP_COLS: 2,
            XL_UP_COLS: 3,
            XXXL_UP_COLS: 4,
          },
        };
      i.Z = (e) => {
        let {
            showcases: i = [],
            isDoneInitialLoad: t = !0,
            onShowcaseClick: a = () => {},
            isAdmin: s = !1,
            showAdminMobileReorderButton: l = !1,
            onAdminOpenReorderModal: C = () => {},
            shouldRefreshOnLoad: I = !1,
            resetShouldRefreshOnLoad: R = () => {},
            showShowcaseTagFilters: T = !0,
            showOnlyCommissionsFilter: P = !0,
            showOnlyCommissions: E = !1,
            onShowOnlyCommissionsChange: M,
            tags: B = [],
            activeTagFilter: G,
            onActiveTagFilterChange: A,
            columnSize: O = "large",
            isArtistOrClientBlocked: _,
          } = e,
          [H, z] = (0, r.useState)([]),
          [U, F] = (0, r.useState)(0),
          [K, X] = (0, r.useState)(!1),
          W = (0, p.I0)(),
          Y = (0, p.v9)((e) => e.session),
          V = (0, r.useRef)(null),
          q = (0, v.Z)(),
          $ = (0, r.useRef)(null),
          Q = (0, b.oG)(),
          J = (0, b.GO)(),
          ee = (0, b.Vv)(),
          ei = (0, b.hW)(),
          et = O === N ? k.SMALL : k.LARGE,
          en =
            (ei && et.XXXL_UP_COLS) ||
            (ee && et.XL_UP_COLS) ||
            (J && et.LG_UP_COLS) ||
            (Q && et.MD_UP_COLS) ||
            et.MD_DOWN_COLS,
          er = U / en,
          ea = (0, r.useRef)(
            new w.t1({ defaultHeight: 200, defaultWidth: 250, fixedWidth: !0 })
          ),
          eo = (0, r.useRef)(
            (0, w.Qj)({
              cellMeasurerCache: ea.current,
              columnCount: en,
              columnWidth: er,
              spacer: 0,
            })
          ),
          es = () => {
            V.current && F(V.current.offsetWidth);
          };
        (0, r.useEffect)(() => {
          es();
        }, [V]),
          (0, r.useEffect)(
            () => (
              es(),
              window.addEventListener("resize", es),
              () => window.removeEventListener("resize", es)
            ),
            []
          ),
          (0, r.useEffect)(() => {
            el();
          }, [en, er]),
          (0, r.useEffect)(() => {
            K && (el(), X(!1));
          }, [K]),
          (0, r.useEffect)(() => {
            z(i.map(() => !1)), I && (X(!0), R());
          }, [i]);
        let el = () => {
            z(i.map(() => !1)),
              ea.current.clearAll(),
              eo.current.reset({ columnCount: en, columnWidth: er, spacer: 0 }),
              $.current && $.current.clearCellPositions();
          },
          ec = (e, i) => () => {
            H[e] || (i(), z((i) => i.map((i, t) => t === e || i)), ed());
          },
          ed = L()(() => {
            eo.current.reset({ columnCount: en, columnWidth: er, spacer: 0 }),
              $.current && $.current.recomputeCellPositions();
          }, 100),
          em = (e) => {
            let { index: t, key: r, parent: o, style: l } = e;
            if (t >= i.length) return;
            let d = i[t];
            return (0, n.jsx)(
              j.Z,
              {
                cache: ea.current,
                index: t,
                parent: o,
                children: (e) => {
                  let { measure: i } = e;
                  return (0, n.jsx)("div", {
                    style: { ...l, width: er },
                    children: (0, n.jsx)(c.Z, {
                      ...(!s && { ref: (e) => q(d.showcaseID, e) }),
                      className: "showcaseListing",
                      showcaseID: d.showcaseID,
                      title: d.title,
                      showcaseItems: d.showcaseItems,
                      isFromVerifiedCommission: d.isFromVerifiedCommission,
                      isDraft: d.isDraft,
                      containsMatureContent: d.containsMatureContent,
                      contentWarnings: d.contentWarnings,
                      onClick: () =>
                        _
                          ? void 0
                          : d.containsMatureContent && !Y.userID
                          ? W((0, x.sO)({ isSignIn: !0 }))
                          : a(d),
                      isAdmin: s,
                      isViewerSignedIn: !!Y.userID,
                      boostConfig: d.boostConfig,
                      ...(d.user && {
                        artistDisplayName: d.user.displayName,
                        artistUsername: d.user.username,
                        artistAvatarURL: d.user.avatarURL,
                        artistBadges: d.user.badges,
                        artistModerationDetails: d.user.moderation,
                      }),
                      hideLikeButton: _,
                      onImageLoad: ec(t, i),
                    }),
                  });
                },
              },
              r
            );
          };
        return (0, n.jsxs)(S, {
          isAdmin: s,
          columnSize: O,
          children: [
            (((null == i ? void 0 : i.length) > 0 && T) || G || E) &&
              (0, n.jsx)("div", {
                className: "tagFilters",
                children: (() => {
                  let e = [],
                    i = (e) => () => {
                      G === e ? A("") : A(e);
                    };
                  for (let t of (s &&
                    l &&
                    e.push(
                      (0, n.jsx)(
                        d.Z,
                        {
                          className: "mobileReorderButton",
                          text: "Reorder",
                          variant: "neutral-light",
                          size: "small",
                          icon: (0, n.jsx)(m.Z, {
                            height: "1rem",
                            width: "1rem",
                            fill: o.Z.GRAY_DARKER,
                          }),
                          onClick: C,
                        },
                        "showcase-reorder-button"
                      )
                    ),
                  P &&
                    e.push(
                      (0, n.jsx)(
                        h.Z,
                        {
                          className: "commissionFilter",
                          choices: [
                            { title: "All", value: "false" },
                            { title: "Commissions only", value: "true" },
                          ],
                          selected: E.toString(),
                          onChange: (e) => M("true" === e.target.value),
                          size: "small",
                          variant: "secondary-outline",
                          cornerStyle: "round-full",
                        },
                        "showcase-commission-filter"
                      )
                    ),
                  B.slice(0, g.default.MAX_PORTFOLIO_TAG_FILTERS)))
                    e.push(
                      (0, n.jsxs)(
                        "div",
                        {
                          className: "tagFilter ".concat(
                            G === t.name ? "activeFilter" : ""
                          ),
                          onClick: i(t.name),
                          children: [
                            (0, n.jsx)("p", {
                              className: "tagFilterName",
                              children: t.name,
                            }),
                            G === t.name &&
                              (0, n.jsx)(u.Z, { className: "tagFilterIcon" }),
                          ],
                        },
                        "tag-".concat(t.name)
                      )
                    );
                  return e;
                })(),
              }),
            (0, n.jsx)("div", {
              className: "showcaseListings",
              ref: V,
              children:
                t &&
                (null == i ? void 0 : i.length) > 0 &&
                (0, n.jsx)(w._K, {
                  children: (e) => {
                    let { height: t } = e;
                    return (0, n.jsx)(w.Rk, {
                      autoHeight: !0,
                      cellCount: i.length,
                      cellMeasurerCache: ea.current,
                      cellPositioner: eo.current,
                      cellRenderer: em,
                      className: "masonryContainer",
                      height: t,
                      overscanByPixels: 400,
                      ref: $,
                      role: "none",
                      scrollTop: Math.max(
                        0,
                        -V.current.getBoundingClientRect().top
                      ),
                      width: U,
                    });
                  },
                }),
            }),
            !t &&
              (0, n.jsx)(D, {
                children: (0, n.jsx)(Z(), { animationData: y }),
              }),
            t &&
              (null == i ? void 0 : i.length) === 0 &&
              !s &&
              (0, n.jsx)("div", {
                className: "tabPlaceholderWrapper",
                children: (0, n.jsx)(f.Z, { text: "No showcases yet" }),
              }),
          ],
        });
      };
      let S = a.ZP.div.withConfig({ componentId: "sc-94ba7e6-0" })(
          [
            "display:flex;flex-direction:column;flex-grow:1;flex-shrink:0;.tagFilters{display:flex;flex-wrap:wrap;margin:1rem 0.5rem 0.75rem 0.5rem;@media (min-width:",
            "){margin:0.75rem 0rem 2rem 0rem;}> *{margin-right:0.5rem;}&:last-child{margin-right:0;}.mobileReorderButton{margin-bottom:0.5rem;@media (min-width:",
            "){display:none;}}.commissionFilter{margin-bottom:0.5rem;width:188px;}.tagFilter{align-items:center;border:1px solid ",
            ";border-radius:2rem;box-sizing:border-box;cursor:pointer;display:flex;height:2rem;margin-bottom:0.5rem;padding-right:0.375rem;transition:border 0.3s;.tagFilterName{color:",
            ";font-size:",
            ";font-weight:",
            ";line-height:1rem;margin:0rem 0.375rem 0rem 0.75rem;transition:color 0.3s;}&:hover{border:1px solid ",
            ";transition:border 0.3s;.tagFilterName{color:",
            ";transition:color 0.3s;}}&.activeFilter{border:1px solid ",
            ";.tagFilterName{color:",
            ";}.tagFilterIcon{fill:",
            ";height:1rem;margin-right:0.125rem;width:1rem;}}}}.showcaseListings{margin:0rem 0.25rem;@media (min-width:",
            "){margin:0 1rem;}@media (min-width:",
            "){margin:0 -0.375rem;}.masonryContainer{overflow:visible !important;> div{overflow:visible !important;}}.showcaseListing{box-sizing:border-box;margin-bottom:0;",
            "}}.tabPlaceholderWrapper{display:flex;flex-direction:column;flex-grow:1;flex-shrink:0;margin:2rem 1rem 0;}",
          ],
          s.Z.MD,
          s.Z.MD,
          o.Z.GRAY_LIGHT,
          o.Z.BLACK_LIGHTER,
          l.Z.BODY_SIZES.S,
          l.Z.WEIGHTS.BOLD,
          o.Z.BLACK_LIGHT,
          o.Z.BLACK_LIGHT,
          o.Z.BLACK_LIGHT,
          o.Z.BLACK_LIGHT,
          o.Z.GRAY_DARK,
          s.Z.MD,
          s.Z.LG,
          (e) =>
            e.columnSize === N
              ? "\n                padding: 0 0.25rem 0.75rem;\n\n                @media (min-width: ".concat(
                  s.Z.MD,
                  ") {\n                    padding: 0 0.375rem 0.75rem;\n                }\n            "
                )
              : "\n                padding: 0 0.25rem 0.75rem;\n\n                @media (min-width: "
                  .concat(
                    s.Z.MD,
                    ") {\n                    padding: 0;\n                    padding-bottom: 0.75rem;\n                }\n                @media (min-width: "
                  )
                  .concat(
                    s.Z.LG,
                    ") {\n                    padding: 0 0.375rem 0.75rem;\n                }\n            "
                  )
        ),
        D = a.ZP.div.withConfig({ componentId: "sc-94ba7e6-1" })([
          "align-items:center;display:flex;justify-content:center;margin:1rem;",
        ]);
    },
    84230: function (e, i, t) {
      var n = t(85893);
      t(67294);
      var r = t(39070);
      i.Z = (e) => {
        let { className: i, height: t = 24, width: a = 24, ...o } = e;
        return (0, n.jsxs)(r.Z, {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          className: i,
          height: t,
          width: a,
          ...o,
          children: [
            (0, n.jsx)("path", {
              d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.1877 20 8.51389 19.3937 7.1708 18.3734C6.59633 17.937 6.08237 17.4248 5.64395 16.8519C4.61316 15.505 4 13.8225 4 12C4 7.59 7.59 4 12 4C13.8123 4 15.4861 4.60628 16.8292 5.62661C17.4037 6.06302 17.9176 6.57519 18.356 7.14805C19.3868 8.49497 20 10.1775 20 12C20 16.41 16.41 20 12 20Z",
            }),
            (0, n.jsx)("path", {
              d: "M18.356 7.14805C17.9176 6.57519 17.4037 6.06302 16.8292 5.62661L5.64395 16.8519C6.08237 17.4248 6.59633 17.937 7.1708 18.3734L18.356 7.14805Z",
            }),
          ],
        });
      };
    },
    30886: function (e, i, t) {
      var n = t(85893);
      t(67294);
      var r = t(39070);
      i.Z = (e) => {
        let { className: i, height: t = 24, width: a = 24, ...o } = e;
        return (0, n.jsx)(r.Z, {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          className: i,
          height: t,
          width: a,
          ...o,
          children: (0, n.jsx)("path", {
            d: "M14 6L13 4H5V21H7V14H12L13 16H20V6H14ZM18 14H14L13 12H7V6H12L13 8H18V14Z",
          }),
        });
      };
    },
    52390: function (e, i, t) {
      var n = t(85893);
      t(67294),
        (i.Z = (e) => {
          let { className: i, height: t = 24, width: r = 24, ...a } = e;
          return (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            className: i,
            height: t,
            width: r,
            ...a,
            children: (0, n.jsx)("path", {
              d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z",
            }),
          });
        });
    },
    7118: function (e, i, t) {
      var n = t(85893);
      t(67294);
      var r = t(39070);
      i.Z = (e) => {
        let { className: i, height: t = 24, width: a = 24, ...o } = e;
        return (0, n.jsx)(r.Z, {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          className: i,
          height: t,
          width: a,
          ...o,
          children: (0, n.jsx)("path", {
            d: "M13 17.01L9 21L5 17.01H8V10H10V17.01H13ZM15 3L19 6.99H16V14H14V6.99H11L15 3Z",
          }),
        });
      };
    },
    96559: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return iA;
        },
      });
      var n = t(85893),
        r = t(19521),
        a = t(75024),
        o = t(1500),
        s = t(41248),
        l = t(86540),
        c = t(67294),
        d = t(8409),
        m = t(72544),
        h = t(86398),
        u = t(92929),
        g = t(57180),
        p = t(66577),
        f = t(17689),
        x = t(55438),
        v = t(72143),
        b = t(76982),
        w = t(71523),
        C = t(11163),
        Z = t(29496),
        y = t(91654),
        I = t(84504),
        L = t(7454),
        j = t(44643),
        N = t(86983),
        k = t(85472),
        S = t(7580),
        D = t(34642),
        R = t(62583),
        T = t(58533),
        P = t(9388),
        E = t(21025),
        M = t(49774),
        B = t(68037),
        G = t(44168),
        A = t(60601),
        O = t(50986),
        _ = t(1371),
        H = t(94770),
        z = t(1817);
      function U(e) {
        let {
            className: i,
            disabled: t = !1,
            title: r,
            menuLabel: a,
            choices: o = [],
            value: s,
            onChange: l,
            activeStyle: d = "check",
            size: m = "large",
            onClear: h = null,
            onSave: u = null,
            onMenuClose: g = null,
          } = e,
          [p, x] = (0, c.useState)(!1),
          {
            refs: v,
            floatingStyles: b,
            context: w,
          } = (0, O.YF)({
            middleware: [
              (0, _.cv)(8),
              (0, _.dp)({
                apply(e) {
                  let { availableHeight: i, elements: t } = e;
                  Object.assign(t.floating.style, {
                    minHeight: "".concat(15, "rem"),
                    maxHeight: "".concat((0, z.Z)(Math.min(i, 500)), "rem"),
                  });
                },
                padding: 8,
              }),
            ],
            open: p,
            onOpenChange: (e) => {
              x(e), g();
            },
            placement: "bottom-start",
            whileElementsMounted: H.Me,
          }),
          [C, Z] = (0, c.useState)(),
          y = (0, O.eS)(w),
          I = (0, O.bQ)(w),
          L = (0, O.qs)(w, { role: "label" }),
          { getReferenceProps: j, getFloatingProps: N } = (0, O.NI)([y, I, L]),
          k = () => {
            C ? (Z(!1), g()) : Z(!0);
          },
          S = (0, n.jsxs)(X, {
            children: [
              (0, n.jsxs)("div", {
                className: "innerContent",
                children: [
                  a && (0, n.jsx)("p", { className: "menuLabel", children: a }),
                  o.map((e) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className: "menuRadioButton",
                        children: [
                          (0, n.jsx)(B.Z, {
                            activeStyle: d,
                            checked: e.value === s,
                            onChange: l,
                            value: e.value,
                          }),
                          e.label,
                        ],
                      },
                      e.label
                    )
                  ),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "menuFooter",
                children: [
                  (0, n.jsx)(f.Z, {
                    text: "Clear",
                    size: "medium",
                    variant: "transparent-neutral",
                    onClick: h,
                  }),
                  (0, n.jsx)(f.Z, {
                    text: "Save",
                    size: "medium",
                    onClick: () => {
                      u(), x(!1), Z(!1);
                    },
                  }),
                ],
              }),
            ],
          });
        return (0, n.jsxs)(F, {
          className: i,
          children: [
            (0, n.jsx)("div", {
              ref: v.setReference,
              ...j(),
              children: (0, n.jsx)(f.Z, {
                disabled: t,
                className: "menuController",
                text: r,
                size: m,
                variant: "neutral-light",
              }),
            }),
            (0, n.jsx)(f.Z, {
              disabled: t,
              className: "modalController",
              text: r,
              size: m,
              variant: "neutral-light",
              onClick: k,
            }),
            (0, n.jsx)("div", {
              className: "modalContainer",
              children: (0, n.jsx)(G.Z, {
                isOpen: C,
                onRequestClose: k,
                maxContentWidth: "15.5rem",
                children: S,
              }),
            }),
            p &&
              (0, n.jsxs)(O.ll, {
                children: [
                  (0, n.jsx)(O.y0, { onClick: k }),
                  (0, n.jsx)(K, {
                    ref: v.setFloating,
                    style: b,
                    ...N(),
                    children: S,
                  }),
                ],
              }),
          ],
        });
      }
      let F = r.ZP.div.withConfig({ componentId: "sc-be05f928-0" })(
          [
            "position:relative;.menuController{display:none;@media (min-width:",
            "){display:flex;}}.modalController{@media (min-width:",
            "){display:none;}}.modalContainer{@media (min-width:",
            "){display:none;}}",
          ],
          h.Z.MD,
          h.Z.MD,
          h.Z.MD
        ),
        K = r.ZP.div.withConfig({ componentId: "sc-be05f928-1" })(
          [
            "background-color:",
            ";border-radius:0.25rem 1.25rem 1.25rem 1.25rem;box-shadow:",
            ";display:flex;flex-direction:column;width:15.5rem;z-index:",
            ";",
          ],
          m.Z.WHITE,
          v.Z.ELEVATION_2,
          u.Z.MODALS
        ),
        X = r.ZP.div.withConfig({ componentId: "sc-be05f928-2" })(
          [
            "display:flex;flex-direction:column;min-height:0;.innerContent{overflow:auto;padding:1.1875rem 1.5rem 1.5rem 1.5rem;.menuLabel{color:",
            ";font-size:",
            ";font-weight:",
            ";line-height:0.9375rem;margin-bottom:0.6875rem;}.menuRadioButton{display:flex;align-items:center;padding:0.5rem 0rem 0.5rem 0.25rem;}}.menuFooter{align-items:center;display:flex;border-top:1px solid ",
            ";flex-shrink:0;height:4rem;justify-content:space-between;padding:0rem 1rem;}",
          ],
          m.Z.BLACK_LIGHTEST_2,
          A.Z.BODY_SIZES.XXS,
          A.Z.WEIGHTS.REGULAR,
          m.Z.GRAY_LIGHT
        );
      var W = t(813);
      let Y = {
        ALL: "ALL",
        IN_GALLERY: "IN_GALLERY",
        NOT_IN_GALLERY: "NOT_IN_GALLERY",
      };
      function V(e) {
        var i, t;
        let {
            character: r,
            characterConcept: a,
            onOpenShowcaseViewerModal: o,
            isPublicView: s,
          } = e,
          [l, d] = (0, c.useState)([]),
          [m, h] = (0, c.useState)(null),
          [u, g] = (0, c.useState)(!1),
          [p, f] = (0, c.useState)(!1),
          [x, v] = (0, c.useState)(Y.ALL),
          [w, C] = (0, c.useState)(Y.ALL),
          [Z, y] = (0, c.useState)("latest"),
          [I, L] = (0, c.useState)(!1),
          [j, N] = (0, c.useState)(!1),
          k = (0, c.useRef)(),
          S = (0, b.oG)(),
          D = (0, P.EY)({
            characterID: r.characterID,
            characterConceptID: a.characterConceptID,
            showOnlyCommissions: u,
            showOnlyVerified: p,
            ...(w === Y.IN_GALLERY && { showOnlyInGallery: !0 }),
            ...(w === Y.NOT_IN_GALLERY && { showOnlyNotInGallery: !0 }),
            sortBy: Z,
            offsetDate: m,
          });
        (0, c.useEffect)(() => {
          var e, i, t;
          if (!D.data) return;
          let n =
            null !==
              (t =
                null === (e = D.data) || void 0 === e ? void 0 : e.showcases) &&
            void 0 !== t
              ? t
              : [];
          (
            null === (i = D.originalArgs) || void 0 === i
              ? void 0
              : i.offsetDate
          )
            ? d((e) => [...e, ...n])
            : d(n),
            j || N(!0);
        }, [D.data]),
          (0, c.useEffect)(() => {
            s && (C(Y.NOT_IN_GALLERY), R());
          }, [s]);
        let R = () => {
          h(null), L(!0);
        };
        return (0, n.jsxs)(q, {
          ref: k,
          children: [
            (0, n.jsxs)("div", {
              className: "filtersBar",
              children: [
                (0, n.jsxs)("div", {
                  className: "contentLeft",
                  children: [
                    (0, n.jsx)(M.Z, {
                      size: S ? "medium" : "small",
                      variant: "secondary",
                      cornerStyle: "round-full",
                      choices: [
                        { title: "All", value: "false" },
                        { title: "Commissions", value: "true" },
                      ],
                      selected: u.toString(),
                      onChange: (e) => {
                        g("true" === e.target.value), R();
                      },
                    }),
                    (0, n.jsx)(M.Z, {
                      size: S ? "medium" : "small",
                      variant: "secondary",
                      cornerStyle: "round-full",
                      choices: [
                        { title: "Everyone", value: "false" },
                        { title: "Verified", value: "true" },
                      ],
                      selected: p.toString(),
                      onChange: (e) => {
                        f("true" === e.target.value), R();
                      },
                    }),
                    !s &&
                      (0, n.jsx)(U, {
                        activeStyle: "circle",
                        title: "Gallery",
                        menuLabel: "Gallery status of tagged showcase",
                        size: S ? "medium" : "small",
                        choices: [
                          { label: "All", value: Y.ALL },
                          { label: "In gallery", value: Y.IN_GALLERY },
                          { label: "Not in gallery", value: Y.NOT_IN_GALLERY },
                        ],
                        value: x,
                        onChange: (e) => v(e.target.value),
                        onClear: () => v(Y.ALL),
                        onSave: () => {
                          C(x), R();
                        },
                        onMenuClose: () => v(w),
                      }),
                  ],
                }),
                (0, n.jsx)("div", { className: "spacer" }),
                (0, n.jsx)("div", {
                  className: "contentRight",
                  children: (0, n.jsx)(W.Z, {
                    onChange: (e) => {
                      y(e), R();
                    },
                    value: Z,
                    options: [
                      { title: "Latest", value: "latest" },
                      { title: "Oldest", value: "oldest" },
                    ],
                    isWrapLabelEnabled: !1,
                  }),
                }),
              ],
            }),
            (0, n.jsx)(T.Z, {
              style: { overflow: "visible" },
              dataLength: l.length,
              next: () => {
                var e;
                let i =
                  null === (e = l[l.length - 1]) || void 0 === e
                    ? void 0
                    : e.created;
                i && h(i);
              },
              hasMore:
                (null == D
                  ? void 0
                  : null === (t = D.data) || void 0 === t
                  ? void 0
                  : null === (i = t.showcases) || void 0 === i
                  ? void 0
                  : i.length) === 20,
              loader: (0, n.jsx)($, { children: "Loading..." }),
              children: (0, n.jsx)(E.Z, {
                isDoneInitialLoad: !D.isLoading,
                showcases: l,
                onShowcaseClick: o,
                shouldRefreshOnLoad: I,
                resetShouldRefreshOnLoad: () => L(!1),
                showOnlyCommissionsFilter: !1,
                showShowcaseTagFilters: !1,
              }),
            }),
          ],
        });
      }
      let q = r.ZP.div.withConfig({ componentId: "sc-883a3797-0" })(
          [
            ".filtersBar{align-items:flex-start;background-color:",
            ";display:flex;overflow:auto;padding:1.25rem 0.5rem;scrollbar-width:none;z-index:",
            ";-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}@media (min-width:",
            "){margin-bottom:0.75rem;padding:1.5rem 0 0.75rem;}.contentLeft{display:flex;flex-direction:row;flex-wrap:nowrap;gap:0.5rem;padding-right:0.75rem;@media (min-width:",
            "){flex-direction:row;gap:0.75rem;}.filters{flex:0;flex-shrink:0;}}.spacer{flex:1;}.contentRight{align-items:center;display:flex;padding-left:0.75rem;.privacyNote{padding:0 1.5rem 0 0.375rem;white-space:nowrap;}}}",
          ],
          m.Z.GRAY_LIGHTER,
          u.Z.ELEMENTS,
          h.Z.MD,
          h.Z.MD
        ),
        $ = (0, r.ZP)(function (e) {
          return (0,
          n.jsx)(p.Z, { ...e, variant: "Light/M", colour: m.Z.BLACK_LIGHTER, children: e.children });
        }).withConfig({ componentId: "sc-883a3797-1" })(
          [
            "align-items:center;display:flex;flex-direction:row;justify-content:center;padding:1rem 0.5rem 2rem;@media (min-width:",
            "){padding:2rem;}",
          ],
          h.Z.MD
        );
      var Q = t(23493),
        J = t.n(Q),
        ee = t(69260),
        ei = t.n(ee),
        et = t(19329),
        en = t(89229),
        er = t(89051),
        ea = t(26288),
        eo = t(75915),
        es = t(69871),
        el = t(32546),
        ec = t(85900),
        ed = t(39859),
        em = t(10929),
        eh = t(53390);
      let eu = "animated";
      function eg(e) {
        var i, t, r, a;
        let {
            className: o,
            boostConfig: s,
            isAnimated: l,
            leftIconClassName: c,
            rightIconClassName: d,
            bottomIconClassName: m,
            ...h
          } = e,
          u = (0, b.oG)(),
          g =
            eh.Z.ICON_NAMES_TO_COMPONENTS[
              null !==
                (r =
                  null == s
                    ? void 0
                    : null === (i = s.icon) || void 0 === i
                    ? void 0
                    : i.name) && void 0 !== r
                ? r
                : eh.Z.ICON_NAMES[0]
            ],
          p =
            eh.Z.ICON_COLOURS_TO_CSS_VALUE[
              null !==
                (a =
                  null == s
                    ? void 0
                    : null === (t = s.icon) || void 0 === t
                    ? void 0
                    : t.colour) && void 0 !== a
                ? a
                : eh.Z.ICON_COLOURS[0]
            ],
          f = l ? eu : "";
        return (0, n.jsxs)(ep, {
          className: o,
          isAnimated: l,
          ...h,
          children: [
            (0, n.jsx)(g, {
              className: "boostIcon left ".concat(c, " ").concat(f),
              height: u ? "1.5rem" : "1.125rem",
              width: u ? "1.5rem" : "1.125rem",
              fill: p,
            }),
            (0, n.jsx)(g, {
              className: "boostIcon bottom ".concat(m, " ").concat(f),
              height: u ? "1.125rem" : "0.875rem",
              width: u ? "1.125rem" : "0.875rem",
              fill: p,
            }),
            (0, n.jsx)(g, {
              className: "boostIcon right ".concat(d, " ").concat(f),
              height: u ? "1.25rem" : "1rem",
              width: u ? "1.25rem" : "1rem",
              fill: p,
            }),
          ],
        });
      }
      let ep = r.ZP.div.withConfig({ componentId: "sc-36a6b632-0" })(
        [
          ".boostIcon{position:absolute;z-index:3;}.boostIcon.left.",
          "{animation:showcasePulseShrinkSignificantly 0.6s infinite ease-in-out alternate;}.boostIcon.bottom.",
          "{animation:showcasePulseGrowSignificantly 0.6s infinite ease-in-out alternate;}.boostIcon.right.",
          "{animation:showcasePulseShrinkSlightly 0.6s infinite ease-in-out alternate;}@keyframes showcasePulseGrowSignificantly{from{transform:scale(0.8);}to{transform:scale(1);}}@keyframes showcasePulseShrinkSignificantly{from{transform:scale(1);}to{transform:scale(0.8);}}@keyframes showcasePulseShrinkSlightly{from{transform:scale(1);}to{transform:scale(0.9);}}",
        ],
        eu,
        eu,
        eu
      );
      var ef = t(30984),
        ex = t(62981),
        ev = t(19421),
        eb = t(88368),
        ew = t(24520),
        eC = t(22179),
        eZ = t(16568),
        ey = t(92158);
      function eI(e) {
        var i, t, r, a, o, s, l, d, m;
        let {
            className: h,
            galleryPiece: u,
            isViewerSignedIn: g,
            onClick: x = () => {},
            onImageLoad: v,
            onEditClick: w,
            onCreditClick: C,
            ...Z
          } = e,
          [y, I] = (0, c.useState)(!1),
          [L, j] = (0, c.useState)(!1),
          [N, k] = (0, c.useState)("verified-media"),
          [S, D] = (0, c.useState)(!1),
          [R, T] = (0, c.useState)(""),
          P = (0, b.g1)(),
          E = (0, b.oG)(),
          M = (0, em.al)(
            {
              userID: (null == u ? void 0 : u.credits)
                ? null === (i = u.credits[0]) || void 0 === i
                  ? void 0
                  : i.userID
                : "",
            },
            {
              skip:
                (null == u
                  ? void 0
                  : null === (t = u.credits) || void 0 === t
                  ? void 0
                  : t.length) !== 1 ||
                !(null === (r = u.credits[0]) || void 0 === r
                  ? void 0
                  : r.userID),
            }
          ),
          B = u.galleryPieceItems[0];
        (0, c.useEffect)(() => {
          if ((null == B ? void 0 : B.type) === "IMAGE") {
            let e = (0, ec.Z)(
                B.url,
                u.isFromVerifiedCommission ? "verified-showcase" : ""
              ),
              i = new Image();
            (i.onload = () => {
              T(e);
            }),
              (i.onerror = () => {
                T(B.url);
              }),
              (i.src = e);
          }
        }, [u.galleryPieceItems]);
        let G = () => {
            "function" == typeof v && v(), D(!0);
          },
          A = (e) => (i) => {
            i.stopPropagation(), e && k(e), j(!L);
          };
        return (0, n.jsxs)(eL, {
          className: h,
          boostConfig: u.boostConfig,
          containsMatureContent: u.containsMatureContent,
          isImageLoaded: S,
          onClick: (e) => {
            e.preventDefault(), x();
          },
          ...Z,
          children: [
            (0, n.jsx)(ex.Z, {
              isBoosted:
                null === (a = u.boostConfig) || void 0 === a
                  ? void 0
                  : a.isEnabled,
              isOpen: L,
              variant: N,
              onRequestClose: A(),
            }),
            (0, n.jsxs)("div", {
              className: "coverOuterContainer",
              onMouseEnter: () => I(!0),
              onMouseLeave: () => I(!1),
              children: [
                (null === (o = u.boostConfig) || void 0 === o
                  ? void 0
                  : o.isEnabled) &&
                  (null === (s = u.boostConfig) || void 0 === s
                    ? void 0
                    : s.enableDecorations) &&
                  (0, n.jsx)(eg, {
                    boostConfig: u.boostConfig,
                    isAnimated: y,
                    leftIconClassName: "leftBoostIcon",
                    bottomIconClassName: "bottomBoostIcon",
                    rightIconClassName: "rightBoostIcon",
                    cornerStyle: "rounded",
                  }),
                (0, n.jsxs)("div", {
                  className: "coverContainer",
                  children: [
                    (u.isDraft &&
                      (0, n.jsx)("div", {
                        className: "draftOverlay",
                        children: (0, n.jsx)("p", {
                          className: "draftText",
                          children: "Draft",
                        }),
                      })) ||
                      (u.containsMatureContent &&
                        (0, n.jsx)(ef.Z, {
                          action: (0, n.jsx)(f.Z, {
                            text: g ? "Show" : "Show me, I'm 18+",
                            variant: "secondary",
                            size: P ? "large" : "small",
                          }),
                          contentWarnings: u.contentWarnings,
                          showMatureContentWarningIcon: !!P,
                        })),
                    u.isFromVerifiedCommission &&
                      (0, n.jsx)("div", {
                        className: "topLeftBadges",
                        children: (0, n.jsx)(ev.Z, {
                          size: P ? "medium" : "small",
                          variant: (
                            null === (l = u.boostConfig) || void 0 === l
                              ? void 0
                              : l.isEnabled
                          )
                            ? "boosted"
                            : "regular",
                          onClick: A("verified-commission"),
                        }),
                      }),
                    (0, n.jsxs)("div", {
                      className: "bottomRightBadges",
                      children: [
                        E &&
                          (null == u ? void 0 : u.credits) &&
                          (null == u
                            ? void 0
                            : null === (d = u.credits) || void 0 === d
                            ? void 0
                            : d.length) > 0 &&
                          (0, n.jsx)("div", {
                            className: "credit",
                            onClick: (e) => {
                              "function" == typeof C &&
                                (e.stopPropagation(), C());
                            },
                            children: (
                              null == M
                                ? void 0
                                : null === (m = M.data) || void 0 === m
                                ? void 0
                                : m.userID
                            )
                              ? (0, n.jsx)(eb.Z, {
                                  src: M.data.avatarURL,
                                  size: "xxxx-small",
                                })
                              : (0, n.jsx)(ey.Z, {
                                  size: "xxxx-small",
                                  isTransparent: !0,
                                }),
                          }),
                        "function" == typeof w &&
                          (0, n.jsx)(ew.Z, {
                            className: "editButton",
                            variant: "light",
                            size: "x-large",
                            onClick: (e) => {
                              e.stopPropagation(), w();
                            },
                            children: (0, n.jsx)(eC.Z, {
                              height: "1.25rem",
                              width: "1.25rem",
                            }),
                          }),
                      ],
                    }),
                    ((null == B ? void 0 : B.type) === "IMAGE" &&
                      (0, n.jsx)("img", {
                        className: "coverImage ".concat(R ? "" : "hidden"),
                        onLoad: G,
                        src: R,
                      })) ||
                      ((null == B ? void 0 : B.type) === "YOUTUBE" &&
                        (0, n.jsx)(eZ.Z, {
                          url: (0, ed.Z)(B.url),
                          disablePlay: !0,
                          playButtonSizeMobile: "small",
                          blurThumbnail: u.containsMatureContent,
                          onThumbnailLoad: G,
                        })),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(p.Z, {
              className: "title",
              variant: E ? "Black/M" : "Mini/Medium",
              component: "div",
              children: u.title,
            }),
          ],
        });
      }
      let eL = r.ZP.div.withConfig({ componentId: "sc-6a7860fb-0" })(
        [
          "cursor:pointer;",
          " .coverOuterContainer{position:relative;.leftBoostIcon{bottom:0.4375rem;left:-0.375rem;@media (min-width:",
          "){bottom:0.4375rem;left:-0.4375rem;}}.bottomBoostIcon{bottom:-0.25rem;left:0.6875rem;@media (min-width:",
          "){bottom:-0.375rem;left:0.8125rem;}}.rightBoostIcon{right:-0.375rem;top:1.75rem;@media (min-width:",
          "){right:-0.4375rem;}}.coverContainer{border-radius:1rem;overflow:hidden;position:relative;",
          " .draftOverlay{align-items:center;background-color:",
          ";border-radius:1rem;display:flex;inset:0;justify-content:center;position:absolute;z-index:2;@media (min-width:",
          "){border-radius:1rem;}.draftText{color:",
          ";font-size:",
          ";font-weight:",
          ";}}.topLeftBadges{align-items:center;display:flex;left:0.5rem;position:absolute;top:0.5rem;z-index:2;",
          " > *{margin-right:0.375rem;&:last-child{margin-right:0rem;}}}.bottomRightBadges{align-items:flex-end;bottom:0;display:flex;position:absolute;right:0.5rem;z-index:2;.credit{background-color:",
          ";border:1px solid ",
          ";border-bottom:none;border-radius:1.75rem 1.75rem 0 0;padding:0.375rem;padding-bottom:0.5rem;}.editButton{margin-left:0.5rem;margin-bottom:0.5rem;}}.coverImage{border-radius:inherit;height:auto;max-width:100%;object-fit:cover;pointer-events:none;user-select:none;width:auto;-moz-user-select:none;-webkit-user-select:none;",
          " &.hidden{visibility:hidden;}}}}.title{overflow:hidden;padding:0.5rem;text-overflow:ellipsis;white-space:nowrap;}",
        ],
        (e) => !e.isImageLoaded && "visibility: hidden;",
        h.Z.MD,
        h.Z.MD,
        h.Z.MD,
        (e) => {
          var i;
          return (
            !!(null === (i = e.boostConfig) || void 0 === i
              ? void 0
              : i.isEnabled) && "box-shadow: 0 0 0 2px ".concat(el.Z.BLACK, ";")
          );
        },
        el.Z.BLACK_LIGHTEST_2,
        h.Z.SM,
        el.Z.WHITE,
        A.Z.BODY_SIZES.XL,
        A.Z.WEIGHTS.BOLD,
        (e) => !e.isImageLoaded && "display: none;",
        m.Z.GRAY_LIGHTER,
        m.Z.BLACK_LIGHTEST_0,
        (e) => e.containsMatureContent && "filter: blur(4rem);"
      );
      var ej = t(46105),
        eN = t(50403),
        ek = t(91018),
        eS = t(98914);
      function eD(e) {
        var i, t, r, a, o, s, l, d, h, u;
        let {
            className: g,
            galleryPiece: x,
            onPublish: v = () => {},
            onDraft: w = () => {},
            onReject: C = () => {},
            ...Z
          } = e,
          [y, I] = (0, c.useState)(!1),
          [L, j] = (0, c.useState)(!1),
          [N, k] = (0, c.useState)("verified-media"),
          [S, D] = (0, c.useState)(!1),
          [R, T] = (0, c.useState)(""),
          P = (0, b.g1)(),
          E = (0, em.al)(
            { userID: null == x ? void 0 : x.userID },
            { skip: !(null == x ? void 0 : x.userID) }
          ),
          M = x.galleryPieceItems[0];
        (0, c.useEffect)(() => {
          if ((null == M ? void 0 : M.type) === "IMAGE") {
            let e = (0, ec.Z)(
                M.url,
                x.isFromVerifiedCommission ? "verified-showcase" : ""
              ),
              i = new Image();
            (i.onload = () => {
              T(e);
            }),
              (i.onerror = () => {
                T(M.url);
              }),
              (i.src = e);
          }
        }, [x.galleryPieceItems]);
        let B = () => {
            D(!0);
          },
          G = (e) => (i) => {
            i.stopPropagation(), e && k(e), j(!L);
          };
        return (0, n.jsxs)(eR, {
          className: g,
          boostConfig: x.boostConfig,
          containsMatureContent: x.containsMatureContent,
          isImageLoaded: S,
          ...Z,
          children: [
            (0, n.jsx)(ex.Z, {
              isBoosted:
                null === (i = x.boostConfig) || void 0 === i
                  ? void 0
                  : i.isEnabled,
              isOpen: L,
              variant: N,
              onRequestClose: G(),
            }),
            (0, n.jsxs)("div", {
              className: "coverOuterContainer",
              onMouseEnter: () => I(!0),
              onMouseLeave: () => I(!1),
              onClick: v,
              children: [
                (null === (t = x.boostConfig) || void 0 === t
                  ? void 0
                  : t.isEnabled) &&
                  (null === (r = x.boostConfig) || void 0 === r
                    ? void 0
                    : r.enableDecorations) &&
                  (0, n.jsx)(eg, {
                    boostConfig: x.boostConfig,
                    isAnimated: y,
                    leftIconClassName: "leftBoostIcon",
                    bottomIconClassName: "bottomBoostIcon",
                    rightIconClassName: "rightBoostIcon",
                    cornerStyle: "rounded",
                  }),
                (0, n.jsxs)("div", {
                  className: "coverContainer",
                  children: [
                    x.containsMatureContent &&
                      (0, n.jsx)(ef.Z, {
                        contentWarnings: x.contentWarnings,
                        showMatureContentWarningIcon: !1,
                      }),
                    x.isFromVerifiedCommission &&
                      (0, n.jsx)("div", {
                        className: "topLeftBadges",
                        children: (0, n.jsx)(ev.Z, {
                          size: P ? "medium" : "small",
                          variant: (
                            null === (a = x.boostConfig) || void 0 === a
                              ? void 0
                              : a.isEnabled
                          )
                            ? "boosted"
                            : "regular",
                          onClick: G("verified-commission"),
                        }),
                      }),
                    (0, n.jsx)("div", {
                      className: "coverImageContainer",
                      children:
                        ((null == M ? void 0 : M.type) === "IMAGE" &&
                          (0, n.jsx)("img", {
                            className: "coverImage ".concat(R ? "" : "hidden"),
                            onLoad: B,
                            src: R,
                          })) ||
                        ((null == M ? void 0 : M.type) === "YOUTUBE" &&
                          (0, n.jsx)(eZ.Z, {
                            url: (0, ed.Z)(M.url),
                            playButtonSizeMobile: "small",
                            blurThumbnail: x.containsMatureContent,
                            onThumbnailLoad: B,
                          })),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "detailsContainer",
              onClick: v,
              children: [
                (0, n.jsx)(p.Z, { variant: "Black/M", children: x.title }),
                (0, n.jsxs)("div", {
                  className: "submittedByContainer",
                  children: [
                    (0, n.jsx)(p.Z, {
                      className: "submittedBy",
                      variant: "Mini/Medium",
                      colour: m.Z.BLACK_LIGHTEST_2,
                      children: "Submitted by",
                    }),
                    (0, n.jsxs)("a", {
                      className: "userLink",
                      href: "/".concat(
                        null == E
                          ? void 0
                          : null === (o = E.data) || void 0 === o
                          ? void 0
                          : o.username
                      ),
                      target: "_blank",
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, n.jsx)(eb.Z, {
                          src:
                            null == E
                              ? void 0
                              : null === (s = E.data) || void 0 === s
                              ? void 0
                              : s.avatarURL,
                          size: "xxx-small",
                        }),
                        (0, n.jsx)(p.Z, {
                          className: "userDisplayName",
                          variant: "Medium/S",
                          colour: m.Z.BLACK_LIGHTER,
                          children:
                            null == E
                              ? void 0
                              : null === (l = E.data) || void 0 === l
                              ? void 0
                              : l.displayName,
                        }),
                        (0, n.jsx)(eS.Z, {
                          className: "badges",
                          badgeSize: "1rem",
                          badges:
                            null == E
                              ? void 0
                              : null === (d = E.data) || void 0 === d
                              ? void 0
                              : d.badges,
                          featuredBadges:
                            null == E
                              ? void 0
                              : null === (h = E.data) || void 0 === h
                              ? void 0
                              : h.featuredBadges,
                          userModerationDetails:
                            null == E
                              ? void 0
                              : null === (u = E.data) || void 0 === u
                              ? void 0
                              : u.moderation,
                          spaceBetween: "0.1875rem",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "actionButtons",
                  children: [
                    (0, n.jsx)(ew.Z, {
                      variant: "neutral",
                      size: "x-large",
                      onClick: (e) => {
                        e.stopPropagation(), C();
                      },
                      children: (0, n.jsx)(ek.Z, {
                        height: "1.25rem",
                        width: "1.25rem",
                      }),
                    }),
                    (0, n.jsx)(f.Z, {
                      variant: "neutral-light",
                      size: "medium",
                      isFullWidth: !0,
                      text: "Draft",
                      onClick: (e) => {
                        e.stopPropagation(), w();
                      },
                    }),
                    (0, n.jsx)(f.Z, {
                      text: "Publish",
                      size: "medium",
                      isFullWidth: !0,
                      onClick: (e) => {
                        e.stopPropagation(), v();
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let eR = r.ZP.div.withConfig({ componentId: "sc-5c57afca-0" })(
        [
          "background-color:",
          ";border-radius:1.25rem;cursor:pointer;",
          " .coverOuterContainer{position:relative;.leftBoostIcon{bottom:0.4375rem;left:-0.375rem;@media (min-width:",
          "){bottom:0.4375rem;left:-0.4375rem;}}.bottomBoostIcon{bottom:-0.25rem;left:0.6875rem;@media (min-width:",
          "){bottom:-0.375rem;left:0.8125rem;}}.rightBoostIcon{right:-0.375rem;top:1.75rem;@media (min-width:",
          "){right:-0.4375rem;}}.coverContainer{border-radius:1.25rem 1.25rem 0 0;overflow:hidden;position:relative;.topLeftBadges{align-items:center;display:flex;left:0.5rem;position:absolute;top:0.5rem;z-index:2;",
          " > *{margin-right:0.375rem;&:last-child{margin-right:0rem;}}}.coverImageContainer{height:0;padding-bottom:56.25%;width:18rem;@media (min-width:",
          "){width:21.4375rem;}.coverImage{border-radius:inherit;height:100%;object-fit:contain;position:absolute;width:100%;",
          " &.hidden{visibility:hidden;}}}}}.detailsContainer{padding:0.5rem;@media (min-width:",
          "){padding:1rem;}}.submittedByContainer{align-items:center;display:flex;gap:0.5rem;margin:0.25rem 0;.userLink{display:flex;align-items:center;.userDisplayName{margin:0 0.375rem 0 0.125rem;}}}.actionButtons{display:flex;gap:0.5rem;margin-top:0.875rem;@media (min-width:",
          "){margin-top:1.125rem;}}",
        ],
        m.Z.WHITE,
        (e) => {
          var i;
          return (
            !!(null === (i = e.boostConfig) || void 0 === i
              ? void 0
              : i.isEnabled) && "box-shadow: 0 0 0 2px ".concat(el.Z.BLACK, ";")
          );
        },
        h.Z.MD,
        h.Z.MD,
        h.Z.MD,
        (e) => !e.isImageLoaded && "display: none;",
        h.Z.MD,
        (e) => e.containsMatureContent && "filter: blur(4rem);",
        h.Z.MD,
        h.Z.MD
      );
      function eT(e) {
        let {
            character: i,
            characterConcept: t,
            onOpenGalleryPieceEditModal: r,
          } = e,
          [a, o] = (0, c.useState)(!1),
          [l, d] = (0, c.useState)(null),
          h = (0, s.v9)((e) => e.galleryPiece.requestHasBeenSaved),
          u = (0, s.I0)(),
          { enqueueSnackbar: g } = (0, Z.Ds)(),
          f = (0, er.D_)({
            characterID: i.characterID,
            characterConceptID: t.characterConceptID,
          }),
          x = f.isSuccess ? f.data.galleryPieces : [];
        (0, c.useEffect)(() => {
          h && (f.refetch(), u((0, k.Y5)({ requestHasBeenSaved: !1 })));
        }, [h]);
        let v = (e) => {
            let { galleryPieceID: i } = e;
            d(i), o(!0);
          },
          b = () => {
            d(null), o(!1);
          },
          w = async () => {
            201 ===
            (
              await (0, y.Z)("/character/gallery/".concat(l), {
                method: "DELETE",
              })
            ).status
              ? u((0, k.Y5)({ requestHasBeenSaved: !0 }))
              : g("Error rejecting gallery request. Please try again later.", {
                  variant: "error",
                }),
              d(null),
              o(!1);
          };
        return (
          x.length > 0 &&
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(ej.Z, {
                isOpen: a,
                heading: "Are you sure?",
                subHeading:
                  "This gallery piece along with its files and media will be permanently deleted. The person who submitted this will not be notified.",
                confirmButtonLabel: "Delete",
                confirmButtonVariant: "danger-gradient",
                onConfirm: w,
                onCancel: b,
                onRequestClose: b,
              }),
              (0, n.jsx)(eP, {
                hasBottomPadding: !1,
                hasTopPadding: !1,
                hasMobileHorizontalPadding: !1,
                sections: [
                  {
                    title: "Requested",
                    customHeader: (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(p.Z, {
                          variant: "Medium/M",
                          component: "span",
                          children: "Submissions",
                        }),
                        (0, n.jsx)(p.Z, {
                          className: "requestCount",
                          variant: "Light/S",
                          colour: m.Z.BLACK_LIGHTER,
                          component: "span",
                          children: x.length,
                        }),
                      ],
                    }),
                    content: (0, n.jsx)("div", {
                      className: "galleryPieceRequests",
                      children: x.map((e) =>
                        (0, n.jsx)(
                          eD,
                          {
                            galleryPiece: e,
                            onDraft: () => r({ ...e, isDraft: !0 }),
                            onPublish: () => r({ ...e, isDraft: !1 }),
                            onReject: () => v(e),
                          },
                          e.galleryPieceID
                        )
                      ),
                    }),
                    headerClassName: "headerClassName",
                  },
                ],
              }),
            ],
          })
        );
      }
      let eP = (0, r.ZP)(eN.Z).withConfig({ componentId: "sc-6ff3e934-0" })(
        [
          "background-color:",
          ";border-radius:1.25rem;box-sizing:border-box;margin-bottom:1.25rem;padding:0.5rem 1rem;@media (min-width:",
          "){margin-bottom:1.5rem;padding:1rem 1rem 1rem 1.5rem;}.headerClassName{padding:0.375rem 0;.requestCount{margin-left:0.5rem;}}.galleryPieceRequests{display:flex;gap:0.5rem;overflow:auto;padding:0.125rem 0 1rem;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}@media (min-width:",
          "){padding:0.125rem 0 0.75rem;}}",
        ],
        m.Z.BLACK_LIGHTEST_00,
        h.Z.MD,
        h.Z.MD
      );
      var eE = t(66848);
      let eM = { ALL: "ALL", OFFICIAL: "OFFICIAL", FANWORK: "FANWORK" };
      function eB(e) {
        var i, t, r, a;
        let {
            character: o,
            characterConcept: l,
            onOpenGalleryPieceCreateModal: d,
            onOpenGalleryPieceEditModal: h,
            onOpenGalleryPieceViewerModal: u,
            onOpenCreditsModal: g,
            isPreview: p,
          } = e,
          [v, C] = (0, c.useState)(!1),
          [Z, y] = (0, c.useState)(eM.ALL),
          [I, L] = (0, c.useState)("latest"),
          [j, N] = (0, c.useState)([]),
          [S, D] = (0, c.useState)([]),
          [R, P] = (0, c.useState)(null),
          [E, B] = (0, c.useState)([]),
          [G, A] = (0, c.useState)(0),
          [O, _] = (0, c.useState)(!1),
          [H, z] = (0, c.useState)(!1),
          [U, F] = (0, c.useState)(!1),
          K = (0, s.v9)((e) => e.galleryPiece.hasBeenSaved),
          X = (0, s.v9)((e) => e.galleryPiece.editedGalleryPiece),
          Y = (0, s.v9)((e) => e.session),
          V = (0, s.I0)(),
          q = (0, c.useRef)(),
          $ = (0, c.useRef)(null),
          Q = (0, b.oG)(),
          ee = (0, b.GO)(),
          el = (0, b.Vv)(),
          ec = (0, w.wt)(o, Y.userID),
          ed = (0, er.i3)({
            characterID: o.characterID,
            characterConceptID: l.characterConceptID,
          }),
          em = (0, er._p)({
            characterID: o.characterID,
            characterConceptID: l.characterConceptID,
            ...(Z === eM.OFFICIAL && { showOnlyOfficial: !0 }),
            ...(Z === eM.FANWORK && { showOnlyFanwork: !0 }),
            sortBy: I,
            matchTags: j,
            includeDraft: ec,
            offsetDate: R,
          }),
          eh = (el && 3) || (ee && 2) || (Q && 1) || 2,
          eu = G / eh,
          eg = (0, c.useRef)(
            new et.t1({ defaultHeight: 200, defaultWidth: 250, fixedWidth: !0 })
          ),
          ep = (0, c.useRef)(
            (0, et.Qj)({
              cellMeasurerCache: eg.current,
              columnCount: eh,
              columnWidth: eu,
              spacer: 0,
            })
          );
        (0, c.useEffect)(() => {
          C(!0);
        }, []),
          (0, c.useEffect)(() => {
            K &&
              (z(!1), ef(), V((0, k.yj)({ hasBeenSaved: !1 })), em.refetch());
          }, [K]),
          (0, c.useEffect)(() => {
            if (X) {
              let e = S.findIndex((e) => e.galleryPieceID === X.galleryPieceID);
              D((i) => i.map((i, t) => (t === e ? X : i))),
                B((i) => i.map((i, t) => t !== e && i)),
                V((0, k.h7)({ editedGalleryPiece: null }));
            }
          }, [X]),
          (0, c.useEffect)(() => {
            q.current && A(q.current.offsetWidth);
          }, [q]),
          (0, c.useEffect)(() => {
            let e = () => {
              q.current && A(q.current.offsetWidth);
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, c.useEffect)(() => {
            (() => {
              var e, i;
              if (!em.data) return;
              let t =
                null !== (i = em.data.galleryPieces) && void 0 !== i ? i : [];
              (
                null === (e = em.originalArgs) || void 0 === e
                  ? void 0
                  : e.offsetDate
              )
                ? (D((e) => [...e, ...t]), B((e) => [...e, ...t.map(() => !1)]))
                : (D(t), B(t.map(() => !1)), F(!0)),
                H ||
                  (z(!0),
                  _(t.length > 0),
                  V((0, k.k8)({ hasGalleryPieces: t.length > 0 })));
            })();
          }, [em.data]),
          (0, c.useEffect)(() => {
            ex();
          }, [eh, eu]),
          (0, c.useEffect)(() => {
            U && (ex(), F(!1));
          }, [U]);
        let ef = () => {
            P(null);
          },
          ex = () => {
            B((e) => e.map(() => !1)),
              eg.current.clearAll(),
              ep.current.reset({ columnCount: eh, columnWidth: eu, spacer: 0 }),
              $.current && $.current.clearCellPositions();
          },
          ev = (e, i) => () => {
            E[e] || (i(), B((i) => i.map((i, t) => t === e || i)), eb());
          },
          eb = J()(() => {
            ep.current.reset({ columnCount: eh, columnWidth: eu, spacer: 0 }),
              $.current && $.current.recomputeCellPositions();
          }, 100),
          ew = (e) => {
            let { index: i, key: t, parent: r, style: a } = e;
            if (i >= S.length) return;
            let o = S[i];
            return (0, n.jsx)(
              et.Z8,
              {
                cache: eg.current,
                index: i,
                parent: r,
                children: (e) => {
                  let { measure: t } = e;
                  return (0, n.jsx)("div", {
                    style: { ...a, width: eu },
                    children: (0, n.jsx)(eI, {
                      className: "galleryPieceListing",
                      galleryPiece: o,
                      isViewerSignedIn: !!Y.userID,
                      onImageLoad: ev(i, t),
                      onClick: () =>
                        o.containsMatureContent && !Y.userID
                          ? V((0, ea.sO)())
                          : u(o),
                      onEditClick: ec && !p ? () => h(o) : void 0,
                      onCreditClick: () => g(o.credits),
                    }),
                  });
                },
              },
              t
            );
          };
        return (0, n.jsxs)(eG, {
          children: [
            H &&
              O &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("div", {
                    className: "filtersBar",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "contentLeft",
                        children: [
                          ec &&
                            !p &&
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(f.Z, {
                                  size: Q ? "medium" : "small",
                                  variant: "secondary",
                                  prefix: (0, n.jsx)(x.Z, {
                                    height: "1.25rem",
                                    width: "1.25rem",
                                    fill: m.Z.WHITE,
                                  }),
                                  text: "Add to gallery",
                                  onClick: d,
                                }),
                                Q &&
                                  v &&
                                  (0, n.jsx)("div", { className: "divider" }),
                              ],
                            }),
                          (0, n.jsx)(M.Z, {
                            className: "filters",
                            size: Q ? "medium" : "small",
                            variant: "secondary",
                            cornerStyle: "round-full",
                            choices: [
                              { title: "All", value: eM.ALL },
                              { title: "Official", value: eM.OFFICIAL },
                              { title: "Fanwork", value: eM.FANWORK },
                            ],
                            selected: Z,
                            onChange: (e) => {
                              y(e.target.value), ef();
                            },
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", { className: "spacer" }),
                      (0, n.jsx)(W.Z, {
                        isWrapLabelEnabled: !1,
                        onChange: (e) => {
                          L(e), ef();
                        },
                        value: I,
                        options: [
                          { title: "Latest", value: "latest" },
                          { title: "Oldest", value: "oldest" },
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "tagsBar",
                    children:
                      null == ed
                        ? void 0
                        : null === (t = ed.data) || void 0 === t
                        ? void 0
                        : null === (i = t.tags) || void 0 === i
                        ? void 0
                        : i.map((e) => {
                            let i = j.includes(e.name);
                            return (0, n.jsxs)(
                              "div",
                              {
                                className: "tagFilter ".concat(
                                  i ? "active" : ""
                                ),
                                onClick: () =>
                                  i
                                    ? N(j.filter((i) => i !== e.name))
                                    : N([...j, e.name]),
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "tagFilterName",
                                    children: e.name,
                                  }),
                                  i &&
                                    (0, n.jsx)(es.Z, {
                                      className: "tagFilterIcon",
                                    }),
                                ],
                              },
                              "tag-".concat(e.name)
                            );
                          }),
                  }),
                ],
              }),
            ec &&
              (0, n.jsx)(eT, {
                character: o,
                characterConcept: l,
                onOpenGalleryPieceEditModal: h,
              }),
            (0, n.jsxs)(T.Z, {
              style: { overflow: "visible" },
              dataLength: S.length,
              next: () => {
                var e;
                let i =
                  null === (e = S[S.length - 1]) || void 0 === e
                    ? void 0
                    : e.created;
                i && P(i);
              },
              hasMore:
                (null == em
                  ? void 0
                  : null === (a = em.data) || void 0 === a
                  ? void 0
                  : null === (r = a.galleryPieces) || void 0 === r
                  ? void 0
                  : r.length) === 20,
              loader: (0, n.jsx)(e_, { children: "Loading..." }),
              children: [
                (0, n.jsx)("div", {
                  className: "galleryPieceListings",
                  ref: q,
                  children:
                    H &&
                    (null == S ? void 0 : S.length) > 0 &&
                    (0, n.jsx)(et._K, {
                      children: (e) => {
                        let { height: i } = e;
                        return (0, n.jsx)(et.Rk, {
                          autoHeight: !0,
                          cellCount: S.length,
                          cellMeasurerCache: eg.current,
                          cellPositioner: ep.current,
                          cellRenderer: ew,
                          className: "masonryContainer",
                          height: i,
                          overscanByPixels: 400,
                          ref: $,
                          role: "none",
                          scrollTop: Math.max(
                            0,
                            -q.current.getBoundingClientRect().top
                          ),
                          width: G,
                        });
                      },
                    }),
                }),
                !H &&
                  (0, n.jsx)(eA, {
                    children: (0, n.jsx)(ei(), { animationData: en }),
                  }),
                H &&
                  (null == S ? void 0 : S.length) === 0 &&
                  (0, n.jsx)(eO, {
                    children: (0, n.jsx)(eo.Z, {
                      text: O
                        ? "No gallery pieces found"
                        : "No gallery pieces yet",
                      children:
                        !O &&
                        ((ec && !p) ||
                          (o.fanworkPolicy.text !== eE.dp &&
                            (0, w.$W)(o, Y))) &&
                        (0, n.jsx)(f.Z, {
                          className: "emptyResultsSubmitButton",
                          size: "medium",
                          variant: "secondary",
                          text: ec && !p ? "Add to gallery" : "Submit fanwork",
                          onClick: d,
                        }),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      let eG = r.ZP.div.withConfig({ componentId: "sc-78efcbc7-0" })(
          [
            "padding:1.25rem 0.5rem 0.75rem 0.5rem;position:relative;@media (min-width:",
            "){padding:1.5rem 0 0 0;}.filtersBar{align-items:flex-start;background-color:",
            ";display:flex;margin-bottom:0.5rem;overflow:auto;scrollbar-width:none;z-index:",
            ";-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}.contentLeft{align-items:flex-start;display:flex;flex-direction:column-reverse;gap:0.5rem;@media (min-width:",
            "){flex-direction:row;gap:0.75rem;}.divider{align-self:stretch;background:",
            ";color:",
            ";min-width:1px;width:1px;}.filters{flex:0;}}.spacer{flex:1;min-width:1rem;}}.tagsBar{display:flex;gap:0.5rem;margin-bottom:1.25rem;overflow:auto;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}@media (min-width:",
            "){margin-bottom:1.5rem;}.tagFilter{align-items:center;border:1px solid ",
            ";border-radius:2rem;box-sizing:border-box;cursor:pointer;display:flex;height:2rem;padding:0.5rem 0.75rem;white-space:nowrap;@media (min-width:",
            "){height:2.25rem;padding:0.625rem 0.875rem;}.tagFilterName{color:",
            ";font-size:",
            ";font-weight:",
            ";line-height:1rem;}&:hover{border:1px solid ",
            ";transition:border 0.3s;.tagFilterName{color:",
            ";transition:color 0.3s;}}&.active{border:2px solid ",
            ";padding:0.5rem 0.375rem 0.5rem 0.75rem;transition:color 0.3s;@media (min-width:",
            "){padding:0.625rem 0.5rem 0.625rem 0.875rem;}.tagFilterName{color:",
            ";}.tagFilterIcon{fill:",
            ";height:1.25rem;margin-left:0.375rem;width:1.25rem;}}}}.galleryPieceListings{margin:0rem -0.25rem;@media (min-width:",
            "){margin:0 -0.375rem;}.masonryContainer{overflow:visible !important;> div{overflow:visible !important;}}.galleryPieceListing{box-sizing:border-box;margin-bottom:0;padding:0rem 0.25rem 0.75rem 0.25rem;@media (min-width:",
            "){padding:0rem 0.375rem 0.75rem 0.375rem;}}}",
          ],
          h.Z.MD,
          m.Z.GRAY_LIGHTER,
          u.Z.ELEMENTS,
          h.Z.MD,
          m.Z.GRAY_LIGHT,
          m.Z.GRAY_LIGHT,
          h.Z.MD,
          m.Z.GRAY,
          h.Z.MD,
          m.Z.BLACK_LIGHTER,
          A.Z.BODY_SIZES.S,
          A.Z.WEIGHTS.BOLD,
          m.Z.BLACK_LIGHT,
          m.Z.BLACK,
          m.Z.BLACK,
          h.Z.MD,
          m.Z.BLACK,
          m.Z.BLACK,
          h.Z.MD,
          h.Z.MD
        ),
        eA = r.ZP.div.withConfig({ componentId: "sc-78efcbc7-1" })([
          "align-items:center;display:flex;justify-content:center;margin:1rem;",
        ]),
        eO = r.ZP.div.withConfig({ componentId: "sc-78efcbc7-2" })([
          "display:flex;flex:1 1 auto;flex-direction:column;padding:1.5rem 0;.emptyResultsSubmitButton{margin-top:1.25rem;}",
        ]),
        e_ = (0, r.ZP)(function (e) {
          return (0,
          n.jsx)(p.Z, { ...e, variant: "Light/M", colour: m.Z.BLACK_LIGHTER, children: e.children });
        }).withConfig({ componentId: "sc-78efcbc7-3" })(
          [
            "align-items:center;display:flex;flex-direction:row;justify-content:center;padding:1rem 0.5rem 2rem;@media (min-width:",
            "){padding:2rem;}",
          ],
          h.Z.MD
        );
      var eH = t(69880);
      function ez(e) {
        var i, t, r;
        let {
            className: a,
            character: o,
            characterConcept: l,
            isPreview: d,
          } = e,
          [m, h] = (0, c.useState)(!1),
          [u, g] = (0, c.useState)("Gallery"),
          [p, f] = (0, c.useState)("medium"),
          [x, v] = (0, c.useState)(!1),
          [T, P] = (0, c.useState)(!1),
          [E, M] = (0, c.useState)([]),
          [B, G] = (0, c.useState)(!1),
          [A, O] = (0, c.useState)(null),
          { enqueueSnackbar: _ } = (0, Z.Ds)(),
          H = (0, s.v9)((e) => e.session),
          z = (0, s.I0)(),
          U = (0, C.useRouter)(),
          F = (0, b.oG)(),
          K = (0, w.wt)(o, H.userID);
        (0, c.useEffect)(() => {
          h(!0);
        }, []),
          (0, c.useEffect)(() => {
            if (U.query.showcaseID) ei({ showcaseID: U.query.showcaseID });
            else if (U.query.galleryPiece) X(U.query.galleryPiece);
            else if (U.query.createGalleryPiece) {
              var e;
              let i =
                null === (e = (0, N.Z)()) || void 0 === e ? void 0 : e.userID;
              W((0, w.wt)(o, i), !!i)();
            }
          }, [U.query]);
        let X = async (e) => {
            let i = await (0, y.Z)("/character/gallery/".concat(e));
            200 === i.status
              ? q(i.body.galleryPiece)
              : _("Failed to load gallery piece.", { variant: "error" });
          },
          W = (e, i) => () => {
            (0, eH.Z)({
              characterID: o.characterID,
              characterConceptID: l.characterConceptID,
              dispatch: z,
              isCurator: e,
              isSignedIn: i,
            });
          },
          Y = (e) => {
            z((0, k.Fc)({ galleryPiece: e })),
              z((0, k.FD)({ isModalOpen: !0 }));
          },
          q = (e) => {
            let i = (0, L.Z)(
              null == o ? void 0 : o.slug,
              null == l ? void 0 : l.slug,
              e.title,
              e.galleryPieceID
            );
            window.history.pushState(
              { ...window.history.state, as: i, url: i },
              "",
              i
            ),
              z((0, k.Fc)({ galleryPiece: e })),
              v(!0);
          },
          $ = (e) => {
            M(e), P(!0);
          },
          Q = (e) => {
            let i = (0, j.Z)(e.user.username, e.title, e.showcaseID);
            window.history.pushState(
              { ...window.history.state, as: i, url: i },
              "",
              i
            ),
              O(e),
              G(!0);
          },
          J = () => {
            G(!1), O(null);
            let e = (0, I.Z)(o.slug, l.slug);
            window.history.pushState(
              { ...window.history.state, as: e, url: e },
              "",
              e
            );
          },
          ee = (e) => {
            var i, t;
            return null == e
              ? void 0
              : null === (t = e.taggedCharacterProfiles) || void 0 === t
              ? void 0
              : null ===
                  (i = t.find(
                    (e) =>
                      e.characterID === o.characterID &&
                      e.characterConceptID === l.characterConceptID
                  )) || void 0 === i
              ? void 0
              : i.galleryPieceID;
          },
          ei = async (e) => {
            let i = ee(e);
            if (i) {
              let e = await (0, y.Z)("/character/gallery/".concat(i));
              200 === e.status &&
              (e.body.galleryPiece.isRequest || e.body.galleryPiece.isDraft)
                ? Y(e.body.galleryPiece)
                : 200 === e.status
                ? q(e.body.galleryPiece)
                : _("Failed to load gallery piece.", { variant: "error" });
            } else {
              var t;
              let i =
                null === (t = (0, N.Z)()) || void 0 === t ? void 0 : t.userID;
              z((0, k.D6)({ isFromShowcase: !0 })),
                z((0, k.rQ)({ showcaseID: e.showcaseID })),
                z((0, k.Cb)({ initialShowcaseID: e.showcaseID })),
                W((0, w.wt)(o, i), !!i)();
            }
            J();
          },
          et = () => [
            {
              title: "Gallery",
              onClick: () => g("Gallery"),
              content: (0, n.jsx)(eB, {
                character: o,
                characterConcept: l,
                isPreview: d,
                onOpenGalleryPieceCreateModal: W(K, !!H.userID),
                onOpenGalleryPieceEditModal: Y,
                onOpenGalleryPieceViewerModal: q,
                onOpenCreditsModal: $,
              }),
            },
            {
              title: "Tagged",
              onClick: () => g("Tagged"),
              content: (0, n.jsx)(V, {
                character: o,
                characterConcept: l,
                onOpenShowcaseViewerModal: Q,
                isPublicView: !K || d,
              }),
            },
          ];
        return (0, n.jsxs)(eU, {
          className: a,
          children: [
            (0, n.jsx)(D.jY, {
              isOpen: x,
              onRequestClose: () => {
                z((0, k.qv)()), v(!1);
                let e = (0, I.Z)(o.slug, l.slug);
                window.history.pushState(
                  { ...window.history.state, as: e, url: e },
                  "",
                  e
                );
              },
              onOpenGalleryPieceEditModal: () => {
                z((0, k.FD)({ isModalOpen: !0 })), v(!1);
              },
            }),
            (0, n.jsx)(D.Ym, {
              isOpen: B,
              showcaseID: null == A ? void 0 : A.showcaseID,
              onRequestClose: J,
              showCharacterGalleryActions: !1,
              headerContent:
                (K ||
                  (null == A
                    ? void 0
                    : null === (i = A.galleryPiece) || void 0 === i
                    ? void 0
                    : i.galleryPieceID)) &&
                (0, n.jsx)(eF, {
                  onClick: () => ei(A),
                  text:
                    ((null == A
                      ? void 0
                      : null === (t = A.galleryPiece) || void 0 === t
                      ? void 0
                      : t.galleryPieceID) &&
                      "View in gallery") ||
                    (K && "Add to gallery"),
                  variant: (
                    null == A
                      ? void 0
                      : null === (r = A.galleryPiece) || void 0 === r
                      ? void 0
                      : r.galleryPieceID
                  )
                    ? "neutral"
                    : "secondary",
                }),
            }),
            (0, n.jsx)(R.Z, {
              isOpen: T,
              onRequestClose: () => {
                P(!1), M([]);
              },
              credits: E,
              anchorToBottomOnMobile: !0,
            }),
            (m &&
              F &&
              (0, n.jsx)(S.Z, { activeTab: u, tabs: et(), size: "large" })) ||
              (0, n.jsx)(S.Z, {
                tabsClassName: "stickyTabs",
                activeTab: u,
                tabs: et(),
                size: p,
                isSticky: !0,
                onStick: (e) => {
                  e ? f("small") : f("medium");
                },
                stickyTopDistance: 0,
              }),
          ],
        });
      }
      let eU = r.ZP.div.withConfig({ componentId: "sc-c97f7b8e-0" })(
          [
            ".stickyTabs{@media (min-width:",
            "){position:initial;top:initial;}}",
          ],
          h.Z.MD
        ),
        eF = (0, r.ZP)(f.Z).withConfig({ componentId: "sc-c97f7b8e-1" })([
          "margin-right:0.5rem;",
        ]);
      var eK = t(11795),
        eX = t(197),
        eW = t(47552),
        eY = t(45792);
      let eV = () => {
        let [e, i] = (0, c.useState)(!1),
          t = (0, s.v9)((e) => e.character),
          r = (0, s.v9)((e) => e.session),
          a = (0, s.v9)((e) => e.characterConcept),
          o = (0, s.I0)(),
          l = (0, C.useRouter)();
        return e
          ? null
          : (0, n.jsx)(eW.Z, {
              onRequestShowContent: () => {
                if (null == r ? void 0 : r.userID) {
                  if (!(0, w.gH)(r)) {
                    l.push("/settings");
                    return;
                  }
                } else {
                  o(
                    (0, ea.sO)({
                      isSignIn: !0,
                      pathToRedirectTo: (0, I.Z)(t.body.slug, a.body.slug),
                    })
                  );
                  return;
                }
                i(!0);
              },
              backButtonLabel: "Back to all concepts",
              isFullScreen: !1,
            });
      };
      var eq = (e) => {
        let {
            changeSelectedConcept: i,
            isPublicView: t = !0,
            numPiecesMap: r,
          } = e,
          a = (0, s.v9)((e) => e.characterConcepts),
          { isDarkMode: o } = (0, eX.TC)();
        return (0, n.jsx)(e1, {
          children: (0, n.jsx)("div", {
            className: "conceptsListContainer",
            children: a.characterConcepts
              .filter((e) => !t || e.status === eY.Pb.STATUSES.PUBLISHED)
              .map((e) => {
                var a, s, l, c;
                return (0, n.jsxs)(
                  "div",
                  {
                    className: "characterConceptContainer",
                    onClick: () => {
                      i(e.slug, !0);
                    },
                    children: [
                      e.containsMatureContent && t && (0, n.jsx)(eV, {}),
                      (0, n.jsx)(eK.Z, {
                        className: "characterConceptBasicInfo",
                        characterConcept: e,
                        isPublicView: t,
                        numPiecesMap: r,
                        showAvatar: !0,
                        showNumPieces: !0,
                        showDraftTag: !0,
                        size: "small",
                      }),
                      (t && 0 === e.references.length && (0, n.jsx)(e0, {})) ||
                        (0, n.jsxs)("div", {
                          className: "referenceImageContainer",
                          children: [
                            (e.references.length > 1 || !t) &&
                              (0, n.jsx)(eQ, {
                                imgURL:
                                  null !==
                                    (l =
                                      null === (a = e.references[1]) ||
                                      void 0 === a
                                        ? void 0
                                        : a.imgURL) && void 0 !== l
                                    ? l
                                    : "/img/image-placeholder.webp",
                                isDarkMode: o,
                              }),
                            (0, n.jsx)(eJ, {
                              imgURL:
                                null !==
                                  (c =
                                    null === (s = e.references[0]) ||
                                    void 0 === s
                                      ? void 0
                                      : s.imgURL) && void 0 !== c
                                  ? c
                                  : "/img/image-placeholder.webp",
                            }),
                          ],
                        }),
                      (0, n.jsx)("div", {
                        className: "colorsContainer",
                        children: [
                          ...e.palette,
                          ...[, , , ,].fill({ hexCode: m.Z.GRAY_LIGHT }),
                        ]
                          .filter((e) => e.hexCode)
                          .slice(0, 4)
                          .map((e, i) =>
                            (0, n.jsx)(
                              e$,
                              { color: e.hexCode, index: i },
                              e.colorID
                            )
                          ),
                      }),
                    ],
                  },
                  e.characterConceptID
                );
              }),
          }),
        });
      };
      let e$ = r.ZP.div.withConfig({ componentId: "sc-a0f08ae8-0" })(
          [
            "background-color:",
            ";",
            ";flex-grow:1;flex-shrink:1;height:100%;min-width:3rem;",
          ],
          (e) => e.color,
          (e) =>
            0 === e.index
              ? "\n                border-top-right-radius: 2.5rem;\n            "
              : 3 === e.index
              ? "\n                border-bottom-right-radius: 2.5rem;\n            "
              : void 0
        ),
        eQ = r.ZP.div.withConfig({ componentId: "sc-a0f08ae8-1" })(
          [
            "position:relative;width:7.375rem;&::after{content:'';position:absolute;top:0;right:0;bottom:0;width:7.5rem;background:linear-gradient( 270deg,",
            " 0,",
            " 70px,",
            " 118px,",
            " 100% ),url(",
            ");background-position:right center;background-size:cover;}",
          ],
          (e) => (e.isDarkMode ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)"),
          (e) =>
            e.isDarkMode ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)",
          m.Z.WHITE,
          m.Z.WHITE,
          (e) => e.imgURL
        ),
        eJ = r.ZP.div.withConfig({ componentId: "sc-a0f08ae8-2" })(
          [
            "background:url(",
            ");background-size:cover;background-position:center;height:100%;width:17.5rem;",
          ],
          (e) => e.imgURL
        ),
        e0 = r.ZP.div.withConfig({ componentId: "sc-a0f08ae8-3" })(
          [
            "background:",
            ";height:auto;width:25.5rem;mask-image:linear-gradient(to left,",
            " 95%,transparent 100%);-webkit-mask-image:linear-gradient(to left,",
            " 95%,transparent 100%);",
          ],
          m.Z.GRADIENT_MIST,
          m.Z.WHITE,
          m.Z.WHITE
        ),
        e1 = r.ZP.div.withConfig({ componentId: "sc-a0f08ae8-4" })(
          [
            "margin-bottom:1rem;width:100%;.conceptsListContainer{display:flex;flex-direction:column;gap:1rem;.characterConceptContainer{background-color:",
            ";border-radius:2.5rem;cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;position:relative;overflow:hidden;width:100%;.characterConceptBasicInfo{padding:1.75rem 2rem;width:auto;}.referenceImageContainer{display:flex;flex-direction:row;gap:0.5rem;}.colorsContainer{display:flex;flex-direction:column;justify-content:space-evenly;gap:0.5rem;margin-left:0.5rem;}}}",
          ],
          m.Z.WHITE
        );
      var e5 = t(88664),
        e2 = t(42219),
        e7 = t(10643),
        e4 = t(43977),
        e8 = t(1609),
        e9 = t(57175),
        e3 = (e) => {
          var i, t;
          let { className: r, isPublicView: a } = e,
            o = (0, s.v9)((e) => e.characterConcept),
            l = o.body.references.filter((e) => e.imgURL),
            c = o.body.palette.filter((e) => e.hexCode);
          return (
            (l.length > 0 || c.length > 0) &&
            (0, n.jsxs)(e6, {
              imgURL1: (
                null === (t = l[0]) || void 0 === t
                  ? void 0
                  : null === (i = t.imgURL) || void 0 === i
                  ? void 0
                  : i.length
              )
                ? l[0].imgURL
                : "/img/image-placeholder.webp",
              className: r,
              isPublicView: a,
              hasReferences: l.length > 0,
              children: [
                l.length > 0 &&
                  (0, n.jsx)("div", { className: "referenceImage one" }),
                l
                  .slice(1)
                  .map((e) =>
                    (0, n.jsx)(ie, { imgURL: e.imgURL }, e.referenceID)
                  ),
                c.map((e) => (0, n.jsx)(ii, { hexCode: e.hexCode }, e.colorID)),
              ],
            })
          );
        };
      let e6 = r.ZP.div.withConfig({ componentId: "sc-ea0fca78-0" })(
          [
            "align-items:center;display:flex;flex-direction:row;gap:0.5rem;mask-image:linear-gradient(to right,",
            " 95%,transparent 100%);overflow:hidden;-webkit-mask-image:linear-gradient(to right,",
            " 95%,transparent 100%);.referenceImage{height:5rem;background-size:cover;background-position:center;flex-shrink:0;width:7.125rem;&.one{",
            "}}",
          ],
          m.Z.WHITE,
          m.Z.WHITE,
          (e) =>
            e.hasReferences || !e.isPublicView
              ? "background-image: url(".concat(e.imgURL1, ");")
              : "background: ".concat(m.Z.GRADIENT_MIST, ";")
        ),
        ie = r.ZP.div.withConfig({ componentId: "sc-ea0fca78-1" })(
          [
            "height:5rem;background-image:url(",
            ");background-size:cover;background-position:center;flex-shrink:0;width:7.125rem;",
          ],
          (e) => e.imgURL
        ),
        ii = r.ZP.div.withConfig({ componentId: "sc-ea0fca78-2" })(
          [
            "background-color:",
            ";border:1px solid ",
            ";border-radius:2.5rem;height:5rem;flex-shrink:0;width:5rem;",
          ],
          (e) => e.hexCode,
          m.Z.GRAY_LIGHT
        );
      var it = t(906),
        ir = t(58142),
        ia = (e) => {
          var i, t, r;
          let {
              setIsCharacterConceptModalOpen: a,
              setConceptModalScrollAnchor: o,
              changeSelectedConcept: l,
              isPublicView: d,
            } = e,
            h = (0, it.Z)(),
            u = (0, b.oG)(),
            g = (0, b.Vv)(),
            x = (0, s.v9)((e) => e.characterConcept),
            v = (0, s.v9)((e) => e.characterConcepts),
            w = (0, s.v9)((e) => e.character),
            C = (0, s.v9)((e) => e.galleryPiece),
            Z = (0, s.I0)(),
            [L, j] = (0, c.useState)(void 0),
            N = v.characterConcepts.filter(
              (e) =>
                !d || ("UNLISTED" !== w.body.status && "PUBLISHED" === e.status)
            ),
            k = N.findIndex(
              (e) => e.characterConceptID === x.body.characterConceptID
            ),
            S = N[k + 1],
            D = N[k - 1];
          (0, c.useEffect)(() => {
            (async () => {
              let e = {};
              await Promise.all(
                x.body.avatarCredits.map(async (i) => {
                  if (i.userID && !e[i.userID]) {
                    let t = await (0, y.Z)("/user/".concat(i.userID));
                    t.ok && (e[i.userID] = t.body);
                  }
                })
              ),
                await Promise.all(
                  x.body.credits.map(async (i) => {
                    if (i.userID && !e[i.userID]) {
                      let t = await (0, y.Z)("/user/".concat(i.userID));
                      t.ok && (e[i.userID] = t.body);
                    }
                  })
                ),
                await Promise.all(
                  x.body.references.map(async (i) => {
                    await Promise.all(
                      i.credits.map(async (i) => {
                        if (i.userID && !e[i.userID]) {
                          let t = await (0, y.Z)("/user/".concat(i.userID));
                          t.ok && (e[i.userID] = t.body);
                        }
                      })
                    );
                  })
                ),
                Z((0, eY.Zu)({ users: e }));
            })();
          }, [x.body.characterConceptID]),
            (0, c.useEffect)(() => {
              null !== C.hasGalleryPieces && j(!C.hasGalleryPieces);
            }, [C.hasGalleryPieces]);
          let R = (0, n.jsxs)("div", {
              className: "actionButtons",
              children: [
                !d &&
                  (0, n.jsx)(ew.Z, {
                    size: u ? "xxx-large" : "large",
                    variant: "neutral",
                    onClick: () => a(!0),
                    children: (0, n.jsx)(e5.Z, {
                      className: "actionButtonIcon",
                    }),
                  }),
                (0, n.jsx)(ew.Z, {
                  size: u ? "xxx-large" : "large",
                  variant: "neutral",
                  onClick: (e) => {
                    e.stopPropagation(),
                      h(
                        ""
                          .concat(ir.default.FRONT_END_URL)
                          .concat((0, I.Z)(w.body.slug, x.body.slug)),
                        { message: "Character concept link" }
                      );
                  },
                  children: (0, n.jsx)(e2.Z, { className: "actionButtonIcon" }),
                }),
              ],
            }),
            T =
              d &&
              0 === x.body.credits.length &&
              0 === x.body.references.length &&
              x.body.details === eE.dp &&
              0 === x.body.palette.length &&
              0 === x.body.moodBoard.length &&
              !(null === (i = x.body.musicURL) || void 0 === i
                ? void 0
                : i.length),
            P = 0;
          return (
            (P = g ? "8.25rem" : u ? "7.75rem" : "5.5rem"),
            (0, n.jsxs)(io, {
              hasNavContainer: !d || N.length > 1,
              children: [
                (!d || N.length > 1) &&
                  (0, n.jsxs)("div", {
                    className: "navContainer",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "allConceptsBtnContainer",
                        onClick: () => l("all"),
                        children: [
                          (0, n.jsx)(e7.Z, { className: "navIcon" }),
                          (0, n.jsx)(p.Z, {
                            variant: "Subheader/XS",
                            children: "All concepts",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "fwdBackConceptsContainer",
                        children: [
                          (D &&
                            u &&
                            (0, n.jsx)(f.Z, {
                              className: "fwdBackButton",
                              text: D.displayName,
                              variant: "neutral-light",
                              size: "medium",
                              onClick: () => l(D.slug),
                              prefix: (0, n.jsx)(e7.Z, {
                                className: "navIcon",
                              }),
                            })) ||
                            (0, n.jsx)(ew.Z, {
                              onClick: () => l(D.slug),
                              size: "large",
                              variant: "neutral",
                              disabled: u || !D,
                              children: (0, n.jsx)(e7.Z, {
                                className: "navIcon ".concat(
                                  u || !D ? "disabled" : ""
                                ),
                              }),
                            }),
                          (S &&
                            u &&
                            (0, n.jsx)(f.Z, {
                              className: "fwdBackButton",
                              text: S.displayName,
                              variant: "neutral-light",
                              size: u ? "medium" : "small",
                              onClick: () => l(S.slug),
                              suffix: (0, n.jsx)(e4.Z, {
                                height: "1.25rem",
                                width: "1.25rem",
                              }),
                            })) ||
                            (0, n.jsx)(ew.Z, {
                              onClick: () => l(S.slug),
                              size: "large",
                              variant: "neutral",
                              disabled: u || !S,
                              children: (0, n.jsx)(e4.Z, {
                                className: "navIcon ".concat(
                                  u || !S ? "disabled" : ""
                                ),
                                height: "1.25rem",
                                width: "1.25rem",
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                (0, n.jsxs)("div", {
                  className: "characterConceptContainer",
                  children: [
                    (0, n.jsx)("div", { children: R }),
                    (0, n.jsx)("div", {
                      className: "characterConceptContainerTopSection",
                      children: (0, n.jsx)(eK.Z, {
                        characterConcept: x.body,
                        isPublicView: d,
                        size: u ? "large" : "small",
                        displayNameTextVariant: u ? void 0 : "Subheader/S",
                        showIntroduction: u,
                        showAvatar: !0,
                        showDraftTag: !0,
                        showCreditTag: !0,
                        openEditModal: () => a(!0),
                        titleRightPadding: P,
                      }),
                    }),
                    !u &&
                      (!d ||
                        !!(null === (t = x.body.introduction) || void 0 === t
                          ? void 0
                          : t.length)) &&
                      (0, n.jsx)(p.Z, {
                        className: "introductionTextMobile",
                        variant: "Text/M - Light",
                        colour: m.Z.BLACK_LIGHTER,
                        children:
                          null !== (r = x.body.introduction) && void 0 !== r
                            ? r
                            : "Add introduction...",
                      }),
                    !T &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(e8.Z, { className: "divider" }),
                          (0, n.jsx)(eN.Z, {
                            hasTopPadding: !1,
                            hasMobileHorizontalPadding: !1,
                            hasBottomPadding: !1,
                            sections: [
                              {
                                id: "design-reference",
                                title: (0, n.jsx)(p.Z, {
                                  variant: u ? "Subheader/S" : "Medium/M",
                                  colour: m.Z.BLACK,
                                  children: "Design reference",
                                }),
                                content: (0, n.jsx)(e9.Z, {
                                  characterConcept: x.body,
                                  className: "advancedInfo",
                                  isPublicView: d,
                                  openEditModal: (e) => {
                                    a(!0), o(e);
                                  },
                                }),
                                isOpen: L,
                                altContent: (0, n.jsx)(e3, {
                                  className: "referencePreview",
                                  isPublicView: d,
                                }),
                              },
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          );
        };
      let io = r.ZP.div.withConfig({ componentId: "sc-74d990f1-0" })(
          [
            "width:100%;",
            " .navContainer{align-items:center;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:0.875rem;margin-top:1.125rem;padding:0 0.5rem;@media (min-width:",
            "){margin-bottom:1.375rem;margin-top:1.875rem;padding:0;}.navIcon{height:1rem;fill:",
            ";width:1rem;@media (min-width:",
            "){height:1.25rem;width:1.25rem;}&.disabled{fill:",
            ";}}.allConceptsBtnContainer{align-items:center;cursor:pointer;display:flex;flex-direction:row;gap:0.5rem;}.fwdBackConceptsContainer{align-items:center;display:flex;flex-direction:row;gap:0.5rem;max-width:50vw;overflow:auto;.fwdBackButton{max-width:12rem;}}}.characterConceptContainer{background-color:",
            ";border-radius:2rem 2rem 0 0;display:flex;flex-direction:column;padding:1rem;position:relative;@media (min-width:",
            "){background-color:",
            ";border-radius:2.5rem;padding:1.75rem 1.5rem;}@media (min-width:",
            "){padding:1.75rem 2rem;}@media (min-width:",
            "){padding:2.75rem 3rem;}.characterConceptContainerTopSection{display:flex;flex-direction:row;justify-content:space-between;}.actionButtons{align-items:center;display:flex;flex-direction:row;gap:0.5rem;position:absolute;right:1rem;top:0.75rem;@media (min-width:",
            "){right:1.5rem;top:1rem;}@media (min-width:",
            "){right:2rem;top:1.5rem;}.actionButtonIcon{height:1rem;fill:",
            ";width:1rem;@media (min-width:",
            "){height:1.25rem;width:1.25rem;}&.leftMargin{margin-left:0.375rem;@media (min-width:",
            "){margin-left:0.5rem;}}&.rightMargin{margin-right:0.375rem;@media (min-width:",
            "){margin-right:0.5rem;}}}}.introductionTextMobile{margin:1rem 0 0;overflow-wrap:anywhere;}.divider{margin:1rem 0;@media (min-width:",
            "){margin:1.5rem 0;}}}.referencePreview{padding-top:1rem;}",
          ],
          (e) =>
            !e.hasNavContainer &&
            "\n            @media (min-width: "
              .concat(
                h.Z.MD,
                ") {\n                padding-top: 1.5rem;\n            }\n\n            @media (min-width: "
              )
              .concat(
                h.Z.LG,
                ") {\n                padding-top: 2rem;\n            }\n\n            @media (min-width: "
              )
              .concat(
                h.Z.XL,
                ") {\n                padding-top: 3rem;\n            }\n        "
              ),
          h.Z.MD,
          m.Z.BLACK,
          h.Z.MD,
          m.Z.BLACK_LIGHTEST_2,
          m.Z.GRAY_LIGHTER,
          h.Z.MD,
          m.Z.WHITE,
          h.Z.LG,
          h.Z.LG,
          h.Z.MD,
          h.Z.XL,
          m.Z.BLACK,
          h.Z.MD,
          h.Z.MD,
          h.Z.MD,
          h.Z.MD
        ),
        is = () => {
          let [e, i] = (0, c.useState)(!1),
            t = (0, s.v9)((e) => e.character),
            r = (0, s.v9)((e) => e.session),
            a = (0, s.v9)((e) => e.characterConcept),
            o = (0, s.I0)(),
            l = (0, C.useRouter)();
          return e
            ? null
            : (0, n.jsx)(eW.Z, {
                onRequestShowContent: () => {
                  if (null == r ? void 0 : r.userID) {
                    if (!(0, w.gH)(r)) {
                      l.push("/settings");
                      return;
                    }
                  } else {
                    o(
                      (0, ea.sO)({
                        isSignIn: !0,
                        pathToRedirectTo: (0, I.Z)(t.body.slug, a.body.slug),
                      })
                    );
                    return;
                  }
                  i(!0);
                },
                backButtonLabel: "Back to all concepts",
                isFullScreen: !1,
              });
        };
      var il = (e) => {
        let { changeSelectedConcept: i, isPublicView: t, numPiecesMap: r } = e,
          a = (0, s.v9)((e) => e.characterConcepts),
          { isDarkMode: o } = (0, eX.TC)();
        return (0, n.jsx)(ig, {
          children: (0, n.jsx)("div", {
            className: "conceptsListContainer",
            children: a.characterConcepts
              .filter((e) => !t || e.status === eY.Pb.STATUSES.PUBLISHED)
              .map((e) => {
                var a, s, l, c, d;
                return (0, n.jsxs)(
                  "div",
                  {
                    className: "characterConceptContainer",
                    onClick: () => {
                      i(e.slug, !0);
                    },
                    children: [
                      e.containsMatureContent && t && (0, n.jsx)(is, {}),
                      (0, n.jsxs)("div", {
                        className: "characterConceptPreviewContainer",
                        children: [
                          (0, n.jsx)(id, {
                            imgUrl:
                              null !== (d = e.avatarURL) && void 0 !== d
                                ? d
                                : "/img/character-avatar-placeholder.webp",
                          }),
                          (t &&
                            0 === e.references.length &&
                            (0, n.jsx)(iu, {})) ||
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(im, {
                                  imgURL: (
                                    null === (s = e.references[0]) ||
                                    void 0 === s
                                      ? void 0
                                      : null === (a = s.imgURL) || void 0 === a
                                      ? void 0
                                      : a.length
                                  )
                                    ? e.references[0].imgURL
                                    : "/img/image-placeholder.webp",
                                  isFullWidth: 1 === e.references.length && t,
                                }),
                                (!t || e.references[1]) &&
                                  (0, n.jsx)(ih, {
                                    isDarkMode: o,
                                    imgURL: (
                                      null === (c = e.references[1]) ||
                                      void 0 === c
                                        ? void 0
                                        : null === (l = c.imgURL) ||
                                          void 0 === l
                                        ? void 0
                                        : l.length
                                    )
                                      ? e.references[1].imgURL
                                      : "/img/image-placeholder.webp",
                                  }),
                              ],
                            }),
                          (0, n.jsx)("div", {
                            className: "colorsContainer",
                            children: [
                              ...e.palette,
                              ...[, , , ,].fill({ hexCode: m.Z.GRAY_LIGHT }),
                            ]
                              .filter((e) => e.hexCode)
                              .slice(0, 4)
                              .map((e, i) =>
                                (0, n.jsx)(
                                  ic,
                                  { color: e.hexCode, index: i },
                                  e.colorID
                                )
                              ),
                          }),
                        ],
                      }),
                      (0, n.jsx)(eK.Z, {
                        className: "characterConceptBasicInfo",
                        characterConcept: e,
                        isPublicView: t,
                        numPiecesMap: r,
                        size: "small",
                        showDraftTag: !0,
                        showNumPieces: !0,
                        showAvatar: !1,
                      }),
                    ],
                  },
                  e.characterConceptID
                );
              }),
          }),
        });
      };
      let ic = r.ZP.div.withConfig({ componentId: "sc-4bcafe9d-0" })(
          [
            "background-color:",
            ";",
            ";flex-grow:1;flex-shrink:1;height:100%;width:100%;",
          ],
          (e) => e.color,
          (e) =>
            0 === e.index
              ? "\n                border-radius: 0 2.5rem 0 0.25rem;\n            "
              : 3 === e.index
              ? "\n                border-radius: 0.25rem 0 2.5rem 0;\n            "
              : "\n                border-radius: 0.25rem 0 0 0.25rem;\n            "
        ),
        id = r.ZP.div.withConfig({ componentId: "sc-4bcafe9d-1" })(
          [
            "aspect-ratio:65 / 91;background:url(",
            ");background-size:cover;background-position:center;border-radius:1rem;flex-grow:1;height:100%;margin-right:0.25rem;",
          ],
          (e) => e.imgUrl
        ),
        im = r.ZP.div.withConfig({ componentId: "sc-4bcafe9d-2" })(
          [
            "background:url(",
            ");background-size:cover;background-position:center;border-radius:1rem 0 0 1rem;height:auto;flex-grow:",
            ";margin-right:0.25rem;",
          ],
          (e) => e.imgURL,
          (e) => (e.isFullWidth ? 3 : 2)
        ),
        ih = r.ZP.div.withConfig({ componentId: "sc-4bcafe9d-3" })(
          [
            "position:relative;flex-grow:1;margin-right:0.25rem;&::after{content:'';position:absolute;top:0;right:0;bottom:0;width:100%;background:linear-gradient( 270deg,",
            " 0,",
            ",",
            " ),url(",
            ");background-position:left center;background-size:cover;}",
          ],
          m.Z.WHITE,
          (e) =>
            e.isDarkMode
              ? "rgba(0, 0, 0, 0.4) 25%"
              : "rgba(255, 255, 255, 0.4) 25%",
          (e) =>
            e.isDarkMode
              ? "rgba(0, 0, 0, 0) 100%"
              : "rgba(255, 255, 255, 0) 100%",
          (e) => e.imgURL
        ),
        iu = r.ZP.div.withConfig({ componentId: "sc-4bcafe9d-4" })(
          [
            "background:",
            ";border-radius:1rem 0 0 1rem;height:auto;flex-grow:3;margin-right:0.25rem;",
          ],
          m.Z.GRADIENT_MIST
        ),
        ig = r.ZP.div.withConfig({ componentId: "sc-4bcafe9d-5" })(
          [
            "margin-bottom:4rem;width:100%;@media (min-width:",
            "){margin-bottom:1rem;}.conceptsListContainer{display:flex;flex-direction:column;gap:0.5rem;.characterConceptContainer{background-color:",
            ";border-radius:2rem;cursor:pointer;display:flex;flex-direction:column;padding:1rem;position:relative;@media (min-width:",
            "){padding:1.5rem;}.characterConceptPreviewContainer{display:flex;flex-direction:row;gap:0.25rem;height:auto;margin-bottom:0.75rem;.colorsContainer{flex-grow:1;display:flex;flex-direction:column;}}.referenceImageContainer{display:flex;flex-direction:row;gap:0.5rem;}.colorsContainer{display:flex;flex-direction:column;justify-content:space-evenly;gap:0.5rem;}}}",
          ],
          h.Z.MD,
          m.Z.WHITE,
          h.Z.MD
        );
      var ip = t(41664),
        ix = t.n(ip),
        iv = (e) => {
          let { character: i } = e,
            t = (0, b.oG)();
          return (0, n.jsxs)(ib, {
            children: [
              (0, n.jsx)(p.Z, {
                className: "blockedHeader",
                variant: t ? "Subheader/S" : "Medium/L",
                children: "You are blocked",
              }),
              (0, n.jsx)(p.Z, {
                className: "blockedSubheader",
                variant: "Text/M - Light",
                colour: m.Z.BLACK_LIGHTER,
                children: "You are blocked by one of ".concat(
                  i.displayName,
                  "'s curators, so you cannot see this character."
                ),
              }),
              (0, n.jsx)(ix(), {
                href: "/",
                children: (0, n.jsx)(f.Z, {
                  type: "submit",
                  variant: "secondary",
                  text: "Back to home",
                  size: t ? "large" : "medium",
                }),
              }),
            ],
          });
        };
      let ib = r.ZP.div.withConfig({ componentId: "sc-2bd5e7df-0" })(
        [
          "align-items:center;background:",
          ";border-radius:4.375rem 0 0 4.375rem;display:flex;flex-direction:column;justify-content:center;text-align:center;padding:3rem 2rem 0;@media (min-width:",
          "){padding:11rem 2rem;}.blockedHeader{margin-bottom:0.25rem;}.blockedSubheader{margin-bottom:1.25rem;}",
        ],
        m.Z.GRAY_LIGHTER,
        h.Z.MD
      );
      var iw = t(53787);
      let iC = r.ZP.div.withConfig({ componentId: "sc-25cbeefe-0" })(
        [
          "height:100%;margin-top:0;@media (min-width:",
          "){height:calc(100% + 5.5rem);margin-top:-9.25rem;}.previewToggleContainer{margin-bottom:1rem;margin-right:5rem;}.mainContentContainer{box-shadow:",
          ";height:100%;padding:",
          ";@media (min-width:",
          "){background-color:",
          ";border-radius:",
          ";padding:0 1.5rem;}@media (min-width:",
          "){padding:0 3rem 0 2rem;}@media (min-width:",
          "){padding:0 5rem 0 3rem;}@media (min-width:",
          "){border-radius:",
          ";padding:0 3rem;}.innerContentContainer{overflow:hidden;padding-bottom:5.5rem;box-sizing:border-box;border-radius:2.5rem;width:100%;.gallerySection{background-color:",
          ";padding-top:1.75rem;padding-bottom:4rem;@media (min-width:",
          "){padding-top:2rem;padding-bottom:0;}}}}.upperTabSection{align-items:center;border-top:1px solid ",
          ";display:flex;flex-direction:row;gap:0.5rem;justify-content:space-between;padding:1.125rem 0 0.875rem 0.5rem;@media (min-width:",
          "){border-top:none;padding:1.875rem 0 1rem 0;}.conceptsHeaderContainer{display:flex;flex-direction:column;.conceptsHeader{margin-bottom:0.125rem;}}.plusIcon{margin-right:0.5rem;}}",
        ],
        h.Z.MD,
        v.Z.ELEVATION_3,
        (e) => (e.hasCharacterSelected ? "0" : "0 0.5rem"),
        h.Z.MD,
        m.Z.GRAY_LIGHTER,
        (e) => (e.isBlocked ? "3.475rem 0 0 3.475rem" : "3.475rem 0 0 0"),
        h.Z.LG,
        h.Z.XL,
        h.Z.XXL,
        (e) => (e.isBlocked ? "3.475rem" : "3.475rem 3.475rem 0 0"),
        m.Z.GRAY_LIGHTER,
        h.Z.MD,
        m.Z.GRAY_LIGHT,
        h.Z.MD
      );
      var iZ = (e) => {
          let {
              isPublicView: i,
              isPreviewEnabled: t,
              toggleIsPreview: r,
              isCurator: a,
              setIsCharacterConceptModalOpen: o,
              setConceptModalScrollAnchor: l,
              changeSelectedConcept: c,
              numPiecesMap: d,
              isBlocked: h,
            } = e,
            u = (0, s.v9)((e) => e.characterConcept),
            g = (0, b.oG)(),
            v = (0, b.Vv)(),
            w = (0, s.v9)((e) => e.character),
            C = (0, s.I0)();
          return (0, n.jsxs)(iC, {
            hasCharacterSelected: !!u.body.characterConceptID,
            isBlocked: h,
            children: [
              g &&
                (0, n.jsx)("div", {
                  className: "previewToggleContainer",
                  children:
                    a &&
                    (0, n.jsx)(iw.Z, {
                      isChecked: t,
                      onClick: r,
                      size: "large",
                    }),
                }),
              (0, n.jsx)("div", {
                className: "mainContentContainer",
                children:
                  (h &&
                    (0, n.jsx)("div", {
                      className: "innerContentContainer",
                      children: (0, n.jsx)(iv, { character: w.body }),
                    })) ||
                  (!u.body.characterConceptID &&
                    (0, n.jsxs)("div", {
                      className: "innerContentContainer",
                      children: [
                        (g || !i) &&
                          (0, n.jsxs)("div", {
                            className: "upperTabSection",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "conceptsHeaderContainer",
                                children: [
                                  (0, n.jsx)(p.Z, {
                                    className: "conceptsHeader",
                                    variant:
                                      (g &&
                                        ((v && "Subheader/L") ||
                                          "Subheader/S")) ||
                                      "Subheader/XS",
                                    colour: m.Z.BLACK,
                                    children: "All concepts",
                                  }),
                                  g &&
                                    !i &&
                                    (0, n.jsx)(p.Z, {
                                      variant: v
                                        ? "Text/L - Light"
                                        : "Text/S - Light",
                                      colour: m.Z.BLACK_LIGHTEST_2,
                                      children:
                                        "This page is only publicly visible if you have more than 1 character concept.",
                                    }),
                                ],
                              }),
                              !i &&
                                (0, n.jsx)(f.Z, {
                                  text: "Add concept",
                                  prefix: (0, n.jsx)(x.Z, {
                                    className: "plusIcon",
                                    height: "1.25rem",
                                    width: "1.25rem",
                                    colour: m.Z.BLACK,
                                  }),
                                  variant: "neutral-light",
                                  size: g ? "large" : "small",
                                  onClick: () => {
                                    C(
                                      (0, eY.RU)({
                                        characterID: w.body.characterID,
                                      })
                                    ),
                                      o(!0);
                                  },
                                }),
                            ],
                          }),
                        (v &&
                          (0, n.jsx)(eq, {
                            setIsCharacterConceptModalOpen: o,
                            changeSelectedConcept: c,
                            isPublicView: i,
                            numPiecesMap: d,
                          })) ||
                          (0, n.jsx)(il, {
                            setIsCharacterConceptModalOpen: o,
                            changeSelectedConcept: c,
                            isPublicView: i,
                            numPiecesMap: d,
                          }),
                      ],
                    })) ||
                  (0, n.jsxs)("div", {
                    className: "innerContentContainer",
                    children: [
                      (0, n.jsx)(ia, {
                        setIsCharacterConceptModalOpen: o,
                        setConceptModalScrollAnchor: l,
                        changeSelectedConcept: c,
                        isPublicView: i,
                      }),
                      (0, n.jsx)(ez, {
                        className: "gallerySection",
                        character: w.body,
                        characterConcept: u.body,
                        isPreview: i,
                      }),
                    ],
                  }),
              }),
            ],
          });
        },
        iy = t(56882),
        iI = t(26196),
        iL = t(7712),
        ij = t(28733);
      let iN =
        '[{"type":"paragraph","children":[{"text":"I\'m so excited and grateful to see what you create. However, I ask that you respect my boundaries as set out in this Fanworks Policy. Any fanwork that violates this Policy is prohibited."}]},{"type":"paragraph","children":[{"text":""}]},{"type":"heading-one","children":[{"text":"ARTWORK (still or animated)"}]},{"type":"bulleted-list","children":[{"type":"list-item","children":[{"text":"SFW: allowed"}]},{"type":"list-item","children":[{"text":"NSFW: not allowed"}]}]},{"type":"paragraph","children":[{"text":""}]},{"type":"heading-one","children":[{"text":"STORIES (written or illustrative)"}]},{"type":"bulleted-list","children":[{"type":"list-item","children":[{"text":"SFW: ask first"}]},{"type":"list-item","children":[{"text":"NSFW: not allowed"}]}]},{"type":"paragraph","children":[{"text":""}]},{"type":"heading-one","children":[{"text":"OTHER"}]},{"type":"bulleted-list","children":[{"type":"list-item","children":[{"text":"Fan merchandise: ask first"}]}]}]';
      function ik(e) {
        var i, t;
        let { isOpen: r, onRequestClose: a, isPublicView: o } = e,
          [l, m] = (0, c.useState)(!1),
          h = (0, s.v9)((e) => e.character),
          u = (0, s.I0)();
        (0, c.useEffect)(() => {
          r &&
            !o &&
            (u((0, d.vx)()),
            h.body.fanworkPolicy.text === eE.dp &&
              u((0, d.Ey)({ text: iN, isTemp: !0 })));
        }, [r]);
        let g = async () => {
          let e = await (0, y.Z)("/character/".concat(h.body.characterID), {
            method: "PATCH",
            body: {
              fanworkPolicy: h.tempBody.fanworkPolicy,
              preferences: h.tempBody.preferences,
            },
          });
          200 === e.status
            ? (u((0, d.Ey)(e.body.fanworkPolicy)),
              u((0, d.FV)(e.body.preferences)),
              u((0, d.fQ)({ success: "Fanwork policy updated." })),
              a())
            : u((0, d.fQ)({ error: "Failed to save fanwork policy." }));
        };
        return (0, n.jsx)(iL.Z, {
          isOpen: r,
          policy: o ? h.body.fanworkPolicy : h.tempBody.fanworkPolicy,
          displayName: h.body.displayName,
          onRequestClose: a,
          policyType: "Fanworks Policy",
          isDisplayOnly: o,
          onEditCallback: (e) => u((0, d.Ey)({ text: e, isTemp: !0 })),
          onSave: g,
          error: h.alerts.error,
          onClearError: () => u((0, d.fQ)({ error: "" })),
          hasZIndexPriority: !0,
          subHeading: o
            ? void 0
            : "Update your Fanworks Policy to start accepting fanwork through your character profile.",
          richTextEditorProps: {
            shouldReinitializeValue: l,
            resetShouldReinitializeValue: () => m(!1),
          },
          contents:
            !o &&
            (0, n.jsxs)(iS, {
              children: [
                (0, n.jsx)(f.Z, {
                  className: "resetButton",
                  size: "small",
                  variant: "transparent-secondary",
                  disabledVariant: "transparent",
                  text: "Reset to default",
                  disabled:
                    (null === (t = h.tempBody) || void 0 === t
                      ? void 0
                      : null === (i = t.fanworkPolicy) || void 0 === i
                      ? void 0
                      : i.text) === iN,
                  onClick: () => {
                    u((0, d.Ey)({ text: iN, isTemp: !0 })), m(!0);
                  },
                }),
                (0, n.jsx)(e8.Z, {}),
                (0, n.jsx)(eN.Z, {
                  hasBottomPadding: !1,
                  hasMobileHorizontalPadding: !1,
                  hasTopPadding: !1,
                  isDe: !0,
                  sections: [
                    {
                      id: "advanced-permissions",
                      title: "Permissions",
                      customHeader: (0, n.jsx)(p.Z, {
                        variant: "Medium/M",
                        children: "Permissions",
                      }),
                      isDefaultOpen: !0,
                      content: (0, n.jsx)(ij.Z, {
                        dispatch: u,
                        isTemp: !0,
                        isShowcaseTaggingHidden: !0,
                        variant: "small",
                      }),
                    },
                  ],
                }),
              ],
            }),
        });
      }
      let iS = r.ZP.div.withConfig({ componentId: "sc-f253a88f-0" })([
        ".resetButton{margin-top:0.5rem;}.noTopPadding{margin-bottom:0.75rem;}",
      ]);
      var iD = t(55594),
        iR = t(52355),
        iT = t(15061),
        iP = t(71086),
        iE = t(52600),
        iM = t(75884);
      let iB = "22.5rem",
        iG = "28.375rem";
      var iA = (e) => {
        var i, t;
        let {
            character: r,
            characterConcepts: m,
            selectedCharacterConcept: h,
            users: u,
            showMatureContentFilter: p,
            sessionUserID: f,
            numPiecesMap: x,
            isBlocked: v,
          } = e,
          [Z, L] = (0, c.useState)((0, w.wt)(r, f)),
          [j, N] = (0, c.useState)(!1),
          [S, R] = (0, c.useState)(p),
          [T, P] = (0, c.useState)(!1),
          [E, M] = (0, c.useState)(!1),
          [B, G] = (0, c.useState)(!1),
          [A, O] = (0, c.useState)(!1),
          [_, H] = (0, c.useState)(!1),
          [U, F] = (0, c.useState)(!1),
          [K, X] = (0, c.useState)(void 0),
          [W, Y] = (0, c.useState)(null),
          [V, q] = (0, c.useState)(!1),
          [$, Q] = (0, c.useState)(!1),
          J = (0, s.v9)((e) => e.session),
          ee = (0, s.v9)((e) => e.character),
          ei = (0, s.v9)((e) => e.characterConcept),
          et = (0, s.v9)((e) => e.galleryPiece.isModalOpen),
          en = (0, s.v9)((e) => e.galleryPiece.isRequestModalOpen),
          er = (0, s.I0)(),
          eo = (0, C.useRouter)(),
          es = (0, b.oG)(),
          { isDarkMode: el } = (0, eX.TC)(),
          ec = (0, c.useRef)(),
          ed = !Z || j,
          em = (0, c.useRef)(null);
        (0, iD.Z)(ec.current, () => {
          ef();
        }),
          (0, c.useEffect)(() => {
            (0, iy.Z)(er), Q(!0);
          }, []),
          (0, c.useEffect)(() => {
            p && !T ? R(!0) : p || R(!1);
          }, [p]),
          (0, c.useEffect)(
            () => (er((0, d.hh)(r)), () => er((0, d.gO)())),
            [r.characterID]
          ),
          (0, c.useEffect)(
            () => (
              er((0, iR.KV)({ characterConcepts: m })), () => er((0, iR.ux)())
            ),
            [m]
          ),
          (0, c.useEffect)(() => {
            r.characterID && er((0, d.WG)({ users: u }));
          }, [u, r.characterID]),
          (0, c.useEffect)(() => {
            if (!J.userID && !B) {
              G(!0);
              return;
            }
            let e = (0, w.wt)(r, J.userID);
            L(e), P(!1);
            let i = (0, w.gH)(J);
            R(
              (!(null == J ? void 0 : J.userID) || !e || !i) &&
                (r.containsMatureContent || (!!h && h.containsMatureContent))
            );
          }, [null == J ? void 0 : J.userID]),
          (0, c.useEffect)(() => {
            if (E) {
              if ((M(!1), !em.current)) return;
              let e =
                em.current.getBoundingClientRect().top +
                window.pageYOffset -
                65;
              window.pageYOffset > e && window.scrollTo(0, e);
            }
            (null == h ? void 0 : h.characterConceptID)
              ? er((0, eY.zx)({ characterConcept: h }))
              : er((0, eY._R)());
          }, [null == h ? void 0 : h.characterConceptID]),
          (0, c.useEffect)(() => {
            eo.query.editModalTab && eu(eo.query.editModalTab);
          }, [eo.query]),
          (0, c.useEffect)(() => {
            (async () => {
              let e = {};
              ee.body.avatarCredits &&
                ee.body.avatarCredits.length > 0 &&
                (await Promise.all(
                  ee.body.avatarCredits.map(async (i) => {
                    if (i.userID && !e[i.userID]) {
                      let t = await (0, y.Z)("/user/".concat(i.userID));
                      t.ok && (e[i.userID] = t.body);
                    }
                  })
                )),
                er((0, d.P3)({ users: e }));
            })();
          }, [ee.body.characterID]);
        let eh = (e, i) => {
            i && M(!0),
              eo.push((0, I.Z)(ee.body.slug, e), void 0, { scroll: !1 });
          },
          eu = (e) => {
            e && X(e), F(!0), er((0, d.vx)()), er((0, d.ml)());
          },
          eg = () => {
            q(!0);
          },
          ep = () => {
            N((e) => !e);
          },
          ef = () => {
            let e = ec.current;
            if (e) {
              let i = e.clientHeight,
                t = document.documentElement.clientHeight - i - 64;
              t < 0
                ? (e.style.top = "".concat((0, z.Z)(t), "rem"))
                : (e.style.top = "6.25rem");
            }
          },
          ex = () => {
            var e;
            return (null == h
              ? void 0
              : null === (e = h.references) || void 0 === e
              ? void 0
              : e.length) > 0 && h.references[0].imgURL
              ? h.references[0].imgURL
              : r.bannerURL
              ? r.bannerURL
              : r.avatarURL
              ? r.avatarURL
              : "/img/placeholder-banner.webp";
          },
          ev = (() => {
            let e = !(null == h ? void 0 : h.characterConceptID),
              i = [];
            return (
              (null == r ? void 0 : r.quote) &&
                i.push('"'.concat(r.quote, '"')),
              (null == r ? void 0 : r.introduction) && i.push(r.introduction),
              (null == h ? void 0 : h.introduction) && i.push(h.introduction),
              {
                title: ""
                  .concat(r.displayName, ": ")
                  .concat(e ? "All Concepts" : h.displayName),
                description: i.join(" | "),
              }
            );
          })(),
          eb = r.characterID
            ? {
                "og:url": ""
                  .concat(ir.default.FRONT_END_URL)
                  .concat((0, I.Z)(r.slug)),
                "og:type": "website",
                "og:title": ev.title,
                "og:description": ev.description,
                "og:image": ex(),
                "og:site_name": "VGen",
                "twitter:card": "summary_large_image",
              }
            : void 0,
          ew = {
            url: "".concat(ir.default.FRONT_END_URL).concat((0, I.Z)(r.slug)),
            type: "website",
            title: ev.title,
            description: ev.description,
            "twitter:image": ex(),
            image: ex(),
            site_name: "VGen",
            "twitter:card": "summary_large_image",
          };
        return $
          ? (0, n.jsxs)(a.Z, {
              title: ev.title,
              metaProperties: eb,
              metaNames: ew,
              children: [
                (0, n.jsx)(iP.Z, {
                  isOpen: A,
                  isReportingEnabled: !1,
                  onRequestClose: () => O(!1),
                }),
                (0, n.jsx)(D.r3, {
                  isOpen: U,
                  onRequestClose: () => {
                    er((0, d.ml)()), F(!1);
                  },
                  initialTab: K,
                  clearInitialTabs: () => X(void 0),
                  shouldClearStateOnClose: !1,
                  openFanworkPolicyModal: eg,
                }),
                (0, n.jsx)(D.Mw, {
                  isOpen: et,
                  onRequestClose: () => {
                    er((0, k.qv)()),
                      er((0, k.WL)()),
                      er((0, k.Cb)({ initialShowcaseID: "" })),
                      er((0, k.FD)({ isModalOpen: !1 }));
                  },
                }),
                (0, n.jsx)(D.eb, {
                  isOpen: en,
                  onRequestClose: () => {
                    er((0, k.qv)()),
                      er((0, k.WL)()),
                      er((0, k.Cb)({ initialShowcaseID: "" })),
                      er((0, k.Oe)({ isRequestModalOpen: !1 }));
                  },
                }),
                (0, n.jsx)(ik, {
                  isOpen: V,
                  onRequestClose: () => q(!1),
                  isPublicView: ed,
                }),
                (0, n.jsx)(D.Fq, {
                  isOpen: _,
                  onRequestClose: () => H(!1),
                  changeSelectedConcept: eh,
                  scrollAnchor: W,
                  clearScrollAnchor: () => Y(null),
                }),
                (0, n.jsxs)(i_, {
                  isDarkMode: el,
                  bannerURL:
                    null === (i = ee.body) || void 0 === i
                      ? void 0
                      : i.bannerURL,
                  ref: es ? em : void 0,
                  isBlocked: v,
                  children: [
                    (0, n.jsxs)("div", {
                      className: "backgroundBannerContainer",
                      children: [
                        (0, n.jsx)("div", { className: "solidLayer" }),
                        (0, n.jsx)("div", { className: "backgroundBanner" }),
                      ],
                    }),
                    S &&
                      (0, n.jsx)(eW.Z, {
                        onRequestShowContent: () => {
                          if (null == J ? void 0 : J.userID) {
                            if (!(0, w.gH)(J)) {
                              eo.push("/settings");
                              return;
                            }
                          } else {
                            er(
                              (0, ea.sO)({
                                isSignIn: !0,
                                pathToRedirectTo: (0, I.Z)(ee.body.slug),
                              })
                            );
                            return;
                          }
                          R(!1), P(!0);
                        },
                        backButtonLabel: "Back to all concepts",
                        goBack:
                          ei.body.characterConceptID &&
                          !ee.body.containsMatureContent
                            ? () => {
                                eh("all"), R(!1);
                              }
                            : null,
                      }),
                    (0, n.jsx)(o.Z, {
                      character: ee.body,
                      backgroundImage:
                        ee.body.bannerURL || "/img/placeholder-banner.webp",
                      isForcedOpaque: S,
                    }),
                    (0, n.jsx)(l.Z, {
                      className: "characterProfileBanner",
                      bannerImageURL: ee.body.bannerURL,
                    }),
                    (0, n.jsx)("div", {
                      className: "mainContentContainer",
                      children: (0, n.jsxs)("div", {
                        className: "mainContent",
                        children: [
                          (0, n.jsx)("div", {
                            className: "profileSectionContainer",
                            children: (0, n.jsx)("div", {
                              ref: ec,
                              className: "profileSection",
                              id: "profileSection",
                              children: (0, n.jsx)("div", {
                                className: "profileSectionContentContainer",
                                children: (0, n.jsx)("div", {
                                  className: "profileSectionContent",
                                  children: (0, n.jsxs)("div", {
                                    className: "innerProfileContent",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className:
                                          "profileContentBannerOverlay",
                                        children: [
                                          (0, n.jsx)(iO, {
                                            className: "profilePic",
                                            img:
                                              null !==
                                                (t = ee.body.avatarURL) &&
                                              void 0 !== t
                                                ? t
                                                : "/img/character-avatar-placeholder.webp",
                                            children: (0, n.jsx)(iM.Z, {
                                              credits: ee.body.avatarCredits,
                                              marginSize: "medium",
                                            }),
                                          }),
                                          !es &&
                                            Z &&
                                            (0, n.jsx)(iw.Z, {
                                              className:
                                                "previewToggleContainer",
                                              size: "medium",
                                              isChecked: j,
                                              onClick: ep,
                                            }),
                                        ],
                                      }),
                                      (0, n.jsx)(g.Z, {
                                        isPublicView: ed,
                                        openEditModal: eu,
                                        openFanworkPolicyModal: eg,
                                        isBlocked: v,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "primaryContentSection",
                            ref: es ? void 0 : em,
                            children: (0, n.jsx)(iZ, {
                              isCurator: Z,
                              isPublicView: ed,
                              isPreviewEnabled: j,
                              toggleIsPreview: ep,
                              setIsCharacterConceptModalOpen: H,
                              setConceptModalScrollAnchor: Y,
                              changeSelectedConcept: eh,
                              numPiecesMap: x,
                              isBlocked: v,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(iT.Z, { openNavMenu: () => O(!0) }),
                (0, n.jsx)(iI.Z, {}),
              ],
            })
          : (0, n.jsx)(a.Z, {
              title: ev.title,
              metaProperties: eb,
              metaNames: ew,
              children: (0, n.jsx)(iE.Z, { isVisible: !0 }),
            });
      };
      let iO = r.ZP.div.withConfig({ componentId: "sc-c940ade3-0" })(
          [
            "background-repeat:no-repeat;background-size:cover;background-position:center;border:3px solid ",
            ";border-radius:1.5rem;height:14rem;margin-bottom:0.5rem;width:10rem;",
            " @media (min-width:",
            "){height:10.5rem;margin-bottom:1rem;width:7.5rem;}@media (min-width:",
            "){height:14rem;width:10rem;}@media (min-width:",
            "){height:17.5rem;width:12.5rem;}",
          ],
          m.Z.GRAY_LIGHTER,
          (e) => "background-image: url('".concat(e.img, "');"),
          h.Z.MD,
          h.Z.LG,
          h.Z.XL
        ),
        i_ = r.ZP.div.withConfig({ componentId: "sc-c940ade3-1" })(
          [
            "box-sizing:border-box;display:flex;flex-direction:column;min-height:100vh;width:100%;@media (min-width:",
            "){display:",
            ";}.characterProfileBanner{height:",
            ";@media (min-width:",
            "){height:",
            ";}@media (min-width:",
            "){height:",
            ";}@media (min-width:",
            "){height:",
            ";}@media (min-width:",
            "){height:",
            ";}}.mainContentContainer{display:flex;flex:1 1 auto;justify-content:center;border-radius:2.5rem;> .mainContent{display:flex;flex-direction:column;min-height:",
            ";width:100%;@media (min-width:",
            "){flex-direction:row;flex-flow:nowrap;}@media (min-width:",
            "){max-width:100rem;}.profileSectionContainer{box-sizing:border-box;flex-grow:0;flex-shrink:0;margin-top:-11rem;max-width:100%;@media (min-width:",
            "){flex-basis:",
            ";margin-top:-8rem;position:relative;width:",
            ";z-index:",
            ";}@media (min-width:",
            "){margin-top:-11.5rem;}@media (min-width:",
            "){flex-basis:",
            ";width:",
            ";}.profileSection{box-sizing:border-box;padding-bottom:0.5rem;top:6.25rem;width:100%;@media (min-width:",
            "){position:sticky;top:6.25rem;}.profileSectionContentContainer{width:100%;.profileSectionContent{box-sizing:border-box;padding:0 1rem;position:relative;@media (min-width:",
            "){padding:0 2rem 0 2rem;}@media (min-width:",
            "){padding:0 4rem 0 3rem;}@media (min-width:",
            "){padding:0 4rem 0 5rem;}.contactButton{margin-top:1.25rem;}}.innerProfileContent{position:relative;.profileContentBannerOverlay{display:flex;flex-direction:row;justify-content:space-between;.previewToggleContainer{margin-top:8rem;}}}.profilePic{background-position:top center;position:relative;z-index:3;}}}}.primaryContentSection{box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;height:100%;max-width:100%;position:relative;padding-bottom:1.75rem;@media (min-width:",
            "){max-width:calc(100% - ",
            ");}@media (min-width:",
            "){max-width:calc(100% - ",
            ");}@media (min-width:",
            "){}}}}.backgroundBannerContainer{filter:blur(6.25rem);height:100vh;opacity:0.7;position:fixed;top:0;width:100vw;.solidLayer{background-color:",
            ";height:100%;position:absolute;width:100%;z-index:1;}.backgroundBanner{background-repeat:no-repeat;background-size:cover;height:100%;position:absolute;width:100%;",
            "}}",
          ],
          h.Z.MD,
          (e) => (e.isBlocked ? "block" : "flex"),
          "17.5rem",
          h.Z.MD,
          "25vw",
          h.Z.LG,
          "25vw",
          h.Z.XL,
          "22vw",
          h.Z.XXL,
          "16vw",
          (e) => (e.isBlocked ? "auto" : "100vh"),
          h.Z.MD,
          h.Z.XXL,
          h.Z.MD,
          iB,
          iB,
          u.Z.MENU,
          h.Z.LG,
          h.Z.XL,
          iG,
          iG,
          h.Z.MD,
          h.Z.MD,
          h.Z.LG,
          h.Z.XL,
          h.Z.MD,
          iB,
          h.Z.XL,
          iG,
          h.Z.XXXL,
          (e) =>
            e.isDarkMode ? "rgba(33, 33, 46, 0.9)" : "rgba(248, 247, 248, 0.9)",
          (e) =>
            e.bannerURL &&
            "background: url('".concat(
              e.bannerURL,
              "'), lightgray 50% / cover no-repeat;"
            )
        );
    },
    75024: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return l;
        },
      });
      var n = t(85893),
        r = t(9008),
        a = t.n(r),
        o = t(19521),
        s = t(72544);
      function l(e) {
        let {
            className: i,
            title: t,
            children: r,
            metaProperties: o = {},
            metaNames: s = {},
          } = e,
          l = [];
        for (let e in o)
          l.push((0, n.jsx)("meta", { property: e, content: o[e] }, e));
        for (let e in s)
          l.push((0, n.jsx)("meta", { name: e, content: s[e] }, e));
        return (0, n.jsxs)(d, {
          className: i,
          children: [
            (0, n.jsx)(c, {}),
            (0, n.jsxs)(a(), {
              children: [
                (0, n.jsx)("title", {
                  children: ""
                    .concat(t)
                    .concat(t.includes("VGen") ? "" : " | VGen"),
                }),
                (0, n.jsx)("meta", {
                  httpEquiv: "Content-Type",
                  content: "text/html; charset=utf-8",
                }),
                (0, n.jsx)("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1, interactive-widget=resizes-content",
                }),
                l,
              ],
            }),
            (0, n.jsx)("div", { className: "mainContent", children: r }),
          ],
        });
      }
      let c = (0, o.vJ)(["body{background-color:", ";}"], s.Z.GRAY_LIGHTER),
        d = o.ZP.div.withConfig({ componentId: "sc-f3d871b8-0" })([
          "box-sizing:border-box;min-height:100vh;width:100%;.mainContent{min-height:100vh;}",
        ]);
    },
    813: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return g;
        },
      });
      var n = t(85893),
        r = t(19521),
        a = t(66577),
        o = t(17175),
        s = t(72544),
        l = t(72143),
        c = t(92929),
        d = t(67294),
        m = t(50986),
        h = t(1371),
        u = t(94770);
      function g(e) {
        var i;
        let {
            onChange: t = () => {},
            value: r,
            options: o = [],
            isWrapLabelEnabled: l = !0,
          } = e,
          [c, g] = (0, d.useState)(0),
          [w, C] = (0, d.useState)(!1),
          [Z, y] = (0, d.useState)(0),
          I = (0, d.useRef)([]),
          {
            context: L,
            floatingStyles: j,
            refs: N,
          } = (0, m.YF)({
            placement: "bottom-end",
            isOpen: w,
            onOpenChange: C,
            middleware: [(0, h.RR)()],
            whileElementsMounted: u.Me,
          }),
          k = (0, m.eS)(L),
          S = (0, m.bQ)(L),
          D = (0, m.c0)(L, { activeIndex: c, listRef: I, onNavigate: g }),
          R = (0, m.qs)(L),
          {
            getFloatingProps: T,
            getItemProps: P,
            getReferenceProps: E,
          } = (0, m.NI)([k, S, D, R]),
          M = (e) => {
            y(e), C(!1), t(o[e].value);
          };
        return (
          (0, d.useEffect)(() => {
            r && y(o.findIndex((e) => e.value === r));
          }, [r]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(p, {
                ref: N.setReference,
                ...E(),
                children: [
                  (0, n.jsx)(a.Z, {
                    component: "label",
                    className: l ? "" : "nowrap",
                    variant: "Light/S",
                    colour: s.Z.BLACK_LIGHT,
                    children: "Sort by:",
                  }),
                  (0, n.jsx)(f, {
                    variant: "Medium/S",
                    children:
                      null === (i = o[Z]) || void 0 === i ? void 0 : i.title,
                  }),
                  (0, n.jsx)(x, {
                    height: "1rem",
                    width: "1rem",
                    isDropdownOpen: w,
                  }),
                ],
              }),
              w &&
                (0, n.jsxs)(m.ll, {
                  children: [
                    (0, n.jsx)(m.y0, { onClick: () => C(!1) }),
                    (0, n.jsx)(v, {
                      ref: N.setFloating,
                      style: j,
                      ...T(),
                      children: o.map((e, i) =>
                        (0, n.jsx)(
                          b,
                          {
                            variant: "Medium/M",
                            tabIndex: c === i ? 0 : -1,
                            ref: (e) => (I.current[i] = e),
                            selected: Z === i,
                            ...P({ onClick: () => M(i) }),
                            children: e.title,
                          },
                          e.value
                        )
                      ),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      let p = r.ZP.div.withConfig({ componentId: "sc-24f1110e-0" })([
          "cursor:pointer;align-items:center;display:flex;flex-direction:row;padding:0.5rem 0;.nowrap{white-space:nowrap;}",
        ]),
        f = (0, r.ZP)(a.Z).withConfig({ componentId: "sc-24f1110e-1" })([
          "margin:0 0.25rem 0 0.375rem;",
        ]),
        x = (0, r.ZP)(o.Z).withConfig({ componentId: "sc-24f1110e-2" })(
          ["transform:", ";"],
          (e) => (e.isDropdownOpen ? "rotate(-180deg)" : "rotate(0deg)")
        ),
        v = r.ZP.div.withConfig({ componentId: "sc-24f1110e-3" })(
          [
            "background:",
            ";border-radius:1.25rem 0.25rem 1.25rem 1.25rem;box-shadow:",
            ";padding:1rem 0;z-index:",
            ";",
          ],
          s.Z.WHITE,
          l.Z.ELEVATION_2,
          c.Z.MENU
        ),
        b = (0, r.ZP)(a.Z).withConfig({ componentId: "sc-24f1110e-4" })(
          [
            "color:",
            ";cursor:pointer;padding:0.75rem 3rem 0.75rem 1.5rem;&:hover{color:",
            ";}",
          ],
          (e) => (e.selected ? s.Z.BLACK : s.Z.BLACK_LIGHTER),
          s.Z.BLACK_LIGHT
        );
    },
    15777: function (e, i, t) {
      var n = t(66848);
      let r = {
        PAYPAL_SUPPORTED: n.IB.filter((e) => "BRL" !== e),
        STRIPE_SUPPORTED: n.lx,
        SYMBOLS: {
          AED: "د.إ",
          ALL: "Lek",
          AMD: "֏",
          AOA: "Kz",
          ARS: "AR$",
          AUD: "A$",
          AZN: "₼",
          BAM: "KM",
          BDT: "৳",
          BGN: "лв",
          BHD: ".د.ب",
          BND: "B$",
          BOB: "Bs",
          BRL: "R$",
          CAD: "C$",
          CHF: "CHF",
          CLP: "CL$",
          CNY: "CN\xa5",
          COP: "COL$",
          CRC: "₡",
          CZK: "Kč",
          DKK: "kr",
          DOP: "RD$",
          DZD: "دج",
          EGP: "ج.م",
          EUR: "€",
          GBP: "\xa3",
          GIP: "GIP\xa3",
          GMD: "D",
          GTQ: "Q",
          GYD: "GY$",
          HKD: "HK$",
          HRK: "kn",
          HUF: "Ft",
          IDR: "Rp",
          ILS: "₪",
          INR: "₹",
          ISK: "\xcdkr",
          JMD: "J$",
          JOD: "د.ا",
          JPY: "JP\xa5",
          KES: "KSh",
          KHR: "៛",
          KRW: "₩",
          KWD: "د.ك",
          LKR: "SL Rs",
          MAD: ".د.م",
          MDL: "L",
          MKD: "Ден",
          MOP: "MOP$",
          MUR: "MUR Rs",
          MXN: "M$",
          MYR: "RM",
          NAD: "N$",
          NGN: "₦",
          NOK: "kr",
          NZD: "NZ$",
          OMR: "﷼",
          PAB: "B/.",
          PEN: "S/",
          PHP: "₱",
          PLN: "zł",
          PYG: "₲",
          QAR: "ر.ق",
          RON: "lei",
          RSD: "РСД",
          RUB: "₽",
          SAR: "﷼",
          SEK: "kr",
          SGD: "S$",
          THB: "฿",
          TND: "د.ت",
          TRY: "₺",
          TTD: "TT$",
          TWD: "NT$",
          TZS: "TSh",
          USD: "$",
          UYU: "$U",
          UZS: "so'm",
          VND: "₫",
          XCD: "EC$",
          XOF: "CFA",
          ZAR: "R",
        },
        ZERO_DECIMAL: n.VF,
        THREE_DECIMAL: n.Bb,
      };
      i.Z = r;
    },
    7454: function (e, i) {
      i.Z = function (e, i) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          n = arguments.length > 3 ? arguments[3] : void 0;
        return "/c/"
          .concat(e, "/")
          .concat(i, "/gallery/")
          .concat(t.replace(/\W+/g, "-").toLowerCase(), "/")
          .concat(n);
      };
    },
    44643: function (e, i) {
      i.Z = (e, i, t) =>
        "/"
          .concat(e, "/portfolio/showcase/")
          .concat(i.replace(/\W+/g, "-").toLowerCase(), "/")
          .concat(t);
    },
    89051: function (e, i, t) {
      t.d(i, {
        D_: function () {
          return s;
        },
        _p: function () {
          return o;
        },
        aV: function () {
          return c;
        },
        i3: function () {
          return l;
        },
      });
      var n = t(74904),
        r = t(9246);
      let a = n.ZP.injectEndpoints({
          endpoints: (e) => ({
            fetchGalleryPieces: e.query({
              query: (e) => {
                let {
                  characterID: i,
                  characterConceptID: t,
                  showOnlyOfficial: n = !1,
                  showOnlyFanwork: r = !1,
                  includeDraft: a = !1,
                  sortBy: o = "latest",
                  matchTags: s = [],
                  offsetDate: l,
                } = e;
                return {
                  url: "/character/gallery/".concat(i, "/").concat(t),
                  method: "GET",
                  params: {
                    showOnlyFanwork: r,
                    showOnlyOfficial: n,
                    includeDraft: a,
                    sortBy: o,
                    ...(s.length > 0 && { matchTags: s.join(",") }),
                    ...(l && { offsetDate: l }),
                  },
                };
              },
            }),
            fetchGalleryPieceRequests: e.query({
              query: (e) => {
                let { characterID: i, characterConceptID: t } = e;
                return {
                  url: "/character/gallery/"
                    .concat(i, "/")
                    .concat(t, "/requests"),
                  method: "GET",
                };
              },
            }),
            fetchGalleryPiece: e.query({
              query: (e) => {
                let { galleryPieceID: i } = e;
                return { url: "/character/gallery/".concat(i), method: "GET" };
              },
              providesTags: (e, i, t) => [
                { type: n.qq.GALLERY_PIECE, id: t.galleryPieceID },
              ],
            }),
            fetchTopGalleryPieceTags: e.query({
              query: (e) => {
                let { characterID: i, characterConceptID: t } = e;
                return {
                  url: "/character/gallery/".concat(i, "/").concat(t, "/tags"),
                  method: "GET",
                };
              },
            }),
          }),
        }),
        o = (0, r.r)(a.useFetchGalleryPiecesQuery),
        s = (0, r.r)(a.useFetchGalleryPieceRequestsQuery),
        l = (0, r.r)(a.useFetchTopGalleryPieceTagsQuery),
        { useFetchGalleryPieceQuery: c } = a;
    },
  },
]);
