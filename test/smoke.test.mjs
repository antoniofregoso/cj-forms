// Smoke test: imports the *built* dist (what actually gets published) and
// mounts each component in a jsdom document with minimal realistic props.
// Catches broken exports, malformed markup, and thrown exceptions - not
// full behavioral coverage.
import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { render } from "preact";

const dom = new JSDOM(`<!doctype html><html><body><div id="app"></div></body></html>`, {
  runScripts: "outside-only",
});
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.customElements = dom.window.customElements;
globalThis.CustomEvent = dom.window.CustomEvent;

const { CjForm, FormLead, FormHero, FormModal, FormAppoinment } = await import("../dist/index.js");

const context = { lang: "es", theme: "light" };
const form = {
  name: { label: { es: "Nombre" }, help: { es: "Requerido" } },
  email: { label: { es: "Correo" }, help: { es: "Requerido" }, help2: { es: "Invalido" } },
  submit: { text: { es: "Enviar" } },
  cancel: { text: { es: "Cancelar" } },
};

test("CjForm.render() returns a mountable form vnode", () => {
  document.body.innerHTML = "";
  const wrapper = document.createElement("div");
  document.body.appendChild(wrapper);
  render(new CjForm(form, context).render(), wrapper);
  assert.ok(wrapper.querySelector("form"), "expected CjForm to render a <form>");
  assert.ok(wrapper.querySelector("#submit-lead"), "expected the submit button to render");
});

test("FormLead mounts a form inside a section", () => {
  document.body.innerHTML = "";
  const el = new FormLead({ context, form });
  document.body.appendChild(el);
  assert.ok(el.querySelector("section"), "expected a <section> inside form-lead");
  assert.ok(el.querySelector("form"), "expected the form to render inside form-lead");
});

test("FormHero mounts caption/title text alongside the form", () => {
  document.body.innerHTML = "";
  const el = new FormHero({
    context,
    form,
    title: { text: { es: "Titulo hero" } },
    description: { text: { es: "Descripcion **hero**" } },
  });
  document.body.appendChild(el);
  assert.ok(el.querySelector("form"), "expected the form to render inside form-hero");
  assert.match(el.querySelector("h1")?.textContent ?? "", /Titulo hero/);
});

test("FormModal mounts a modal card with the form", () => {
  document.body.innerHTML = "";
  const el = new FormModal({ context, form, title: { text: { es: "Titulo modal" } } });
  document.body.appendChild(el);
  assert.ok(el.querySelector(".modal-card"), "expected a .modal-card inside form-modal");
  assert.ok(el.querySelector("form"), "expected the form to render inside form-modal");
});

test("FormAppoinment mounts the calendar container, time grid and form", () => {
  document.body.innerHTML = "";
  const el = new FormAppoinment({ context, form: {} });
  document.body.appendChild(el);
  assert.ok(el.querySelector("#calendar"), "expected the #calendar container to render");
  assert.ok(el.querySelector(".is-time"), "expected time slot buttons to render");
  assert.ok(el.querySelector("form"), "expected the form to render inside form-appoinment");
});
